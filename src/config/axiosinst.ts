import axios from "axios";
import { APIPREFIX } from "./const"

const instance = axios.create({
  baseURL: APIPREFIX,
})

export default instance