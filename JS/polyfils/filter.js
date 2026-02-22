Array.prototype.filterX = function(fn) {
    let n = this.length
    let finalArr = []
    for (let i=0; i<n; i++){
        if (fn(this[i])) {
            finalArr.push(this[i])
        }
    }
    return finalArr
}

let nums = [1,2,3,4,5,6]

let filterArr = nums.filterX((num) => num > 3)
console.log(filterArr);
