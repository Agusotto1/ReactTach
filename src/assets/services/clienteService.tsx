import axios from 'axios';
import { Cliente } from '../models/cliente';

const API_URL = 'http://localhost:4000/clientes'; // URL del backend

export const guardarClienteAPI = async (cliente: Cliente) => {
    try {
        const response = await axios.post(API_URL, cliente);
        return response.data; // Asegúrate de devolver la respuesta
    } catch (error) {
        console.error('Error al guardar el cliente:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};
