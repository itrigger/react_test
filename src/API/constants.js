const API_DOMAIN = 'https://testim.pw'
const API_CONTACT_FORM = API_DOMAIN + '/wp-json/contact-form-7/v1/contact-forms/' //https://medium.com/@mahesh_joshi/wordpress-contact-form-7-rest-api-endpoints-bf45907b571c
const API_ARTICLES = API_DOMAIN + '/wp-json/wp/v2/articles'

export class getEndpoints{
    static CF7endpoint(id) {
        return API_CONTACT_FORM + id + '/feedback'
    }
}