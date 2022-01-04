const API_DOMAIN = 'https://testim.pw'
const API_CONTACT_FORM = API_DOMAIN + '/wp-json/contact-form-7/v1/contact-forms/' //https://medium.com/@mahesh_joshi/wordpress-contact-form-7-rest-api-endpoints-bf45907b571c
const API_ARTICLES = API_DOMAIN + '/wp-json/wp/v2/articles'
const CONST_CK = 'ck_d8132d9bb4b9ced15592c1216d0417ab101b9f1b';
const CONST_CS = 'cs_7d8a26ada88dc1aaed6309906b0a7f67c9c43876';

export class getEndpoints {
    static CF7endpoint(id) {
        return API_CONTACT_FORM + id + '/feedback'
    }

    static ProductsEndpoint() {
        return `${API_DOMAIN} + /wp-json/wc/v2/products?consumer_key=${CONST_CK}&consumer_secret=${CONST_CS}`
    }
}