interface IDIoBank {
    login: boolean;
}
interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: number
}

const dioBank = {
    login: false
}
const userData = {}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const getUserData = (): string | null => {
    return localStorage.getItem("userData")
}
export const createUserStorage = (): void => {
    localStorage.setItem("userData", JSON.stringify(userData))
}
export const changeUserStorage = (userData: IUserData): void => {
    return localStorage.setItem("userData", JSON.stringify(userData))
}
