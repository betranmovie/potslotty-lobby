import instance from '@/services/axiosInstance';
// or import instance from './axiosInstance';

async function login() {
    try {
        const response = await instance.post('/auth/login', {
             "initUserData": "query_id=AAGdcJRPAgAAAJ1wlE_3AnNu&user=%7B%22id%22%3A5630095517%2C%22first_name%22%3A%22Admin%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22befastm%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1690538441&hash=c961391360770f8315d85e652918641fe28acc495418dceba035b15f5355879c"
        })
        localStorage.setItem("token",response.data.token)
        return response.data
    } catch (error) {
        // Handle error here
    }
}


export { login }