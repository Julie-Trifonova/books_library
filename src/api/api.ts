import axios, {CreateAxiosDefaults} from 'axios'

export const instance = axios.create({
        withCredentialsL: true,
        baseURL: "https://books.googleapis.com/books",
        validateStatus: (status) => true,
    } as CreateAxiosDefaults | undefined
)