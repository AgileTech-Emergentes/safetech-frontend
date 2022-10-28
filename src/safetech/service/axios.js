// axios
import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const safeTechApi = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  // params: {}
})
