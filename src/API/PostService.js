import axios from "axios";
import {getEndpoints} from "./constants";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost/wp-json/wp/v2/posts', {
            params: {
                per_page: limit,
                page: page
            }
        })
        return response
    }

    static async getAllArticles(limit = 10, page = 1) {
        const response = await axios.get('http://localhost/wp-json/wp/v2/posts/?_embed', {
           /* params: {
                per_page: limit,
                page: page
            }*/
        })
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost/wp-json/wp/v2/posts/${id}/?_embed`)
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }

    static async sendFormCF7(data, formID){
        const response = await axios.post(getEndpoints.CF7endpoint(formID),data, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        return response
    }
}


