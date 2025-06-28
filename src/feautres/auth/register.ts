import axios from "axios";

export async function register(email: string, password: string) {
    const response = await axios.post('/api/auth/register', {
        email,
        password,
    });

    return response.data;
}
