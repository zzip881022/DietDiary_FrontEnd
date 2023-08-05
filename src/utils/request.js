import axios from 'axios'

// 建立axios範例

const service = axios.create({
    // baseURL: '/', // api的base_Url
    // 後端的請求路徑
    baseURL: 'http://localhost:9100', // api的base_Url
    timeout: 50000 // 請求超時時間
})

// 請求攔截器
axios.interceptors.request.use(
    function (config) {
        // 在傳送請求之前做些什麼
        return config
    },
    function (error) {
        // 對請求錯誤做些什麼
        return Promise.reject(error)
    }
)

// 響應攔截器
axios.interceptors.response.use(
    function (config) {
        // 對響應資料做點什麼
        return config
    },
    function (error) {
        // 對響應錯誤做點什麼
        return Promise.reject(error)
    }
)

export default service