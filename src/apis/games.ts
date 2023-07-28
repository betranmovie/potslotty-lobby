import instance from '@/services/axiosInstance';
import axios from 'axios';
// or import instance from './axiosInstance';

async function fetchListGame() {
    try {
        const response = await instance.get('/game?currency=TON'); // or instance.get('/endpoint');
        return response.data
    } catch (error) {
        // Handle error here
    }
}
async function fetchGameDetail(casinoId:string, gameId: string) {
    try {
        instance.defaults.headers.common['Authorization'] = "Bearer "+ localStorage.getItem("token");
        const response = await instance.get(`/game/${casinoId}/${gameId}`); // or instance.get('/endpoint');
        return response.data
    } catch (error) {
        // Handle error here
    }
}


export { fetchListGame, fetchGameDetail }