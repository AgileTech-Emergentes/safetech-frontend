// axios
import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const safeTechApi = axios.create({
  baseURL: 'http://neural-guard-366803.rj.r.appspot.com/api/v1',
  // params: {}
})
