### АПИ получения постов из кастомной категории
### `/wp-json/wp/v2/articles`

### АПИ отправки сообщения в ContactForm7

### `/wp-json/contact-form-7/v1/contact-forms/cf7_id/feedback` 
https://medium.com/@mahesh_joshi/wordpress-contact-form-7-rest-api-endpoints-bf45907b571c

Данные отправляем в формате таком
    
    const sendForm = async (e) => {
        e.preventDefault()
        setPost({name: '', tel:''})
        let formData = new FormData()

        formData.set("CFname", post.name)
        formData.set("CFtel", post.tel)

        let response = await PostService.sendFormCF7(formData, 12)
        console.log(response.data.message)
    }

    static async sendFormCF7(data, formID){
    const response = await axios.post(getEndpoints.CF7endpoint(formID),data, {
        headers: {
            "content-type": "multipart/form-data",
        }
    })
    return response
    }


https://www.npmjs.com/package/react-alert
https://gist.github.com/Jekins/2bf2d0638163f1294637#CodeBlocks
