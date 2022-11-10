import axios from "axios";
const CSR_API_BASE_URL = "http://localhost:8080/csr/culture/dance";
class DanceService {
  createDanceClub(dance) {
    return axios.post(CSR_API_BASE_URL, dance);
  }
}
export default new DanceService();
