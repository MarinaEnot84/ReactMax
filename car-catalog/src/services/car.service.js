import axios from 'axios';

export const CarService = {
    async getAll() {
    const response = await axios.get('https://localhost:5271/cars')

    return response.data
    }
}