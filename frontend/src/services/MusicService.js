import axios from "axios";
const CSR_API_BASE_URL = "http://localhost:9090/api/v1/music/student";
class MusicService {
  createStudent(student) {
    return axios.post(CSR_API_BASE_URL, student);
  }
}
export default new MusicService();
