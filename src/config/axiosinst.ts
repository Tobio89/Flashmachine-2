import axios from "axios";
import { APIPREFIX } from "./const"

const instance = axios.create({
  baseURL: APIPREFIX + "request_words/", 
})

export default instance