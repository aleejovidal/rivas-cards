import axios from "axios";
const API_URL = "http://localhost:8080/api/equipos";

class equiposService {
  create(data) {
    return axios.post(API_URL, data);
  }
  getAll() {
    return axios.get(API_URL);
  }
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }
  getByUsuario(usuario_id){
    return axios.get(`${API_URL}/usuario/${usuario_id}`)
  }
}

export default new equiposService();
