import axios from "axios";
import {getEndpoints} from "./constants";

const CONST_CK = 'ck_d8132d9bb4b9ced15592c1216d0417ab101b9f1b'
const CONST_CS = 'cs_7d8a26ada88dc1aaed6309906b0a7f67c9c43876'
const CONST_HOST = 'http://localhost'

export default class CalculatorService {
    static async getAllCategories(){
        return await axios.get(`${CONST_HOST}/wp-json/wc/v3/products/categories?consumer_key=${CONST_CK}&consumer_secret=${CONST_CS}&exclude=15`)
    }
}


