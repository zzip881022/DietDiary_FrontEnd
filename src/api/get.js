// 匯入axios設定
import service from '../utils/request'

// 拿到食物清單
export function GetFoodList() {
    return service.get('/foodDB/foodList', {
        headers: { 'Content-Type': 'application/json' }
    })
}