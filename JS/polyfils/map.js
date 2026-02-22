Array.prototype.mapX = function(fn) {
    let n = this.length
    let finalArr = []
    for (let i=0; i<n; i++) {
        finalArr.push(fn(this[i]))
    }
    return finalArr
}

let nums = [1,2,3,4,5,6]

let mapArr = nums.mapX((num) => num*4)
console.log(mapArr);
