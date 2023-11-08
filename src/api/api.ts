import axios, {CreateAxiosDefaults} from 'axios'

export const instance = axios.create({
        withCredentialsL: true,
        baseURL: process.env.REACT_APP_API_PATH,
        validateStatus: (status) => true,
        headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Authorization': `Bearer ${process.env.REACT_APP_CLIENT_ID}`,
        // 'Authorization': `Bearer ${process.env.REACT_APP_CLIENT_SECRET}`,
    },
    } as CreateAxiosDefaults
)