import instance from '@/services/axiosInstance';
// or import instance from './axiosInstance';

async function login() {
    try {
        const response = await instance.post('/auth/login'); // or instance.get('/endpoint');
        console.log(response)
        return response.data
    } catch (error) {
        // Handle error here
    }
}


export { login }