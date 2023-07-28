import instance from '@/services/axiosInstance';
// or import instance from './axiosInstance';

async function login() {
    try {
        const response = await instance.post('/auth/login', {
             "initUserData": "query_id=AAHQhZA1AAAAANCFkDX7B2d6&user=%7B%22id%22%3A898663888%2C%22first_name%22%3A%22Anh%20Vi%E1%BB%87t%22%2C%22last_name%22%3A%22L%C3%AA%22%2C%22username%22%3A%22leanhviet22495%22%2C%22language_code%22%3A%22vi%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1690517667&hash=8fc0dafbffdd2930e848d29e6fc22b107e26a59da0c547e0fd71d4abfa68c9d3"
        })
        localStorage.setItem("token",response.data.token)
        return response.data
    } catch (error) {
        // Handle error here
    }
}


export { login }