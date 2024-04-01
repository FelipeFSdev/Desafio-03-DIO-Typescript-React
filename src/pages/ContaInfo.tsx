import { Center, SimpleGrid } from "@chakra-ui/react"
import { getUserData } from "../services/storage";
import { useState, useEffect } from "react";
import CardInfo from "../components/CardInfo";


const ContaInfo = () => {
    const userStorage = getUserData();
    const [accountName, setAccountName] = useState<string>("");
    const [accountEmail, setAccountEmail] = useState<string>("");

    useEffect(() => {
        if (userStorage) {
            const { name } = JSON.parse(userStorage);
            const { email } = JSON.parse(userStorage);
            setAccountName(name)
            setAccountEmail(email)
        };
    }, [userStorage]);

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} padding="1%">
                <CardInfo mainContent={`Name:`} content={`${accountName}`} />
                <CardInfo mainContent={`Email:`} content={`${accountEmail}`} />
            </SimpleGrid>
        </Center>

    )
}

export default ContaInfo
