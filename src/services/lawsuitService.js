
import axios from 'axios';

export default {
  get: async () => {
    var res = await axios.get(`http://sigjur-backend.herokuapp.com/api/lawsuit/`);
    const lawsuit = res.data;
    return lawsuit;
  }
}