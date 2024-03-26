import axios from 'axios'
import {DEFAULT_BE_URL} from "../../server/constants";

const client = axios.create({
  baseURL: DEFAULT_BE_URL,
})

export default client
