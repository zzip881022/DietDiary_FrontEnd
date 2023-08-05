// 匯入axios設定
import service from '../utils/request'

// 註冊賬號
export function registerAccount (obj) {
    return service.post('/register/registerAccount', JSON.stringify(obj), {
        headers: { 'Content-Type': 'application/json' }
    })
}