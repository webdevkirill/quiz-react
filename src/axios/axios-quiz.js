import axios from 'axios'
import { corsAn } from './corsAnyw';

export default axios.create({
  baseURL: corsAn + 'https://reactquiz-7c9bf.firebaseio.com'
})