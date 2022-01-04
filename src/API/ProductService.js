import axios from "axios";
import {getEndpoints} from "./constants";

export default class ProductService {

    static async getAllProducts(){
        return await axios.get('https://testim.pw/wp-json/wc/v2/products?consumer_key=ck_d8132d9bb4b9ced15592c1216d0417ab101b9f1b&consumer_secret=cs_7d8a26ada88dc1aaed6309906b0a7f67c9c43876')
    }
}


