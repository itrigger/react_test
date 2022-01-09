import axios from "axios";
import {getEndpoints} from "./constants";

export default class ProductService {
    static async getAllProducts(page=1, limit=12){
        return await axios.get(`http://localhost/wp-json/wc/v2/products?page=${page}&per_page=${limit}&category=25&orderby=menu_order&order=asc&consumer_key=ck_d8132d9bb4b9ced15592c1216d0417ab101b9f1b&consumer_secret=cs_7d8a26ada88dc1aaed6309906b0a7f67c9c43876`)
    }
}

