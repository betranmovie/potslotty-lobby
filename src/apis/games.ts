import instance from '@/services/axiosInstance';
// or import instance from './axiosInstance';

async function fetchListGame() {
    try {
        const response = await instance.get('/game'); // or instance.get('/endpoint');
        return response.data
    } catch (error) {
        // Handle error here
    }
}
async function fetchGameDetail(id:string) {
    try {
        const response = await instance.get(`game/${id}?lang=en`); // or instance.get('/endpoint');
        return response.data
    } catch (error) {
        // Handle error here
    }
}


export { fetchListGame, fetchGameDetail }