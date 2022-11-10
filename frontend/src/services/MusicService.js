import axios from "axios";
const CSR_API_BASE_URL = "http://localhost:8080/csr/culture/music";
class MusicService {
  createMusicClub(music) {
    return axios.post(CSR_API_BASE_URL, music);
  }
}
export default new MusicService();
