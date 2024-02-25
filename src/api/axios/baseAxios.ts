import axios from 'axios'
import { BASE_URL } from '~/utils/constants/constants'
export const baseAxios = axios.create({ baseURL: BASE_URL })
