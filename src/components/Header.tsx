import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage, createUserStorage } from '../services/storage'
import { AppContext } from './AppContext'
import { api } from '../api'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    createUserStorage()
    setIsLoggedIn(false)
    navigate('/')
  }
  const infoConta = () => {
    navigate("/infoconta")
  }
  const contaId = async () => {
    const dataApi: any = await api;
    navigate(`/conta/${dataApi.id}`)
  }

  return (
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
            <Button onClick={() => infoConta()} >
              Informações da conta
            </Button>
            <Button onClick={() => contaId()}>
              Conta
            </Button>
          </>
        )
      }
    </Flex>
  )
}
