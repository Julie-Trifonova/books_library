import axios, {CreateAxiosDefaults} from 'axios'

export const instance = axios.create({
        withCredentialsL: true,
        baseURL: process.env.REACT_APP_API_PATH,
        validateStatus: (status) => true,
        headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_CLIENT_ID}`,
        // 'Authorization': `Bearer ${process.env.REACT_APP_CLIENT_SECRET}`,
    },
    } as CreateAxiosDefaults
)

// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \

const fetchClient = () => {
    const defaultOptions = {
        baseURL: process.env.REACT_APP_API_PATH,
        // method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };
    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : `${process.env.REACT_APP_CLIENT_ID}`;
        // config.headers.Authorization =  token ? `Bearer ${token}` : `${process.env.REACT_APP_CLIENT_SECRET}`;
        return config;
    });

    return instance;
};

export default fetchClient;