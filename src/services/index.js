import axios from 'axios'

var httpClient = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/3dfanc53akzzp'
})

httpClient.interceptors.request.use(config => {
    config.headers.common['Content-Type'] = 'application/json'
    return config
})

export default {
    postOrder: async (orderData) => {
        const response = await httpClient.post('/', { data : [orderData] })
        let error = null
        if (response.data.created !== 1) {
            error = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }

        return {
            data: response.data,
            error
        }
    },
    getOrders: async () => {
        const response = await httpClient.get('/')
        let error = null
        if (response.request.status !== 200) {
            error = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }

        return {
            data: response.data,
            error
        }
    }
}