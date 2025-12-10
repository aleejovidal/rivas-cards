import axios from "axios";
const API_URL = "http://localhost:8080/api/usuario";

class UsuarioService {
  create(data) {
    return axios.post(API_URL, data);
  }
  getAll() {
    return axios.get(API_URL);
  }
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

export default new UsuarioService();
