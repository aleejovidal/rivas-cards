import axios from "axios";
const API_URL = "http://localhost:8080/api/jugadores";

class JugadoresService {
  create(data) {
    return axios.post(API_URL, data);
  }
  getAll() {
    return axios.get(API_URL);
  }
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  getByUsuarioId(usuarioId) {
    return axios.get(`${API_URL}/usuario/${usuarioId}`);
  }
}

export default new JugadoresService();
