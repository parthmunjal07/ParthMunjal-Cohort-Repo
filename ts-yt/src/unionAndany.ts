let subs: number | string = '1M' // Union
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'middle' | 'window' = 'aisle'

const orders = ['12', '20', '28', '42']
let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '28') {
        currentOrder = order
        break
    }
    currentOrder = '11'
}

console.log(currentOrder)
