Array.prototype.reduceX = function(fn, intialValue) {
    let acc;
    let n = this.length

    if (!intialValue) {
        intialValue = this[0]
        for (let i=1; i<n; i++){
            acc = fn(acc, this[i])
        }
    } else {
        for (let i=0; i<n; i++){
            acc = fn(acc, this[i])
        }
    }
    return acc
}

let nums = [1,2,3,4,5,6]

let redArr = nums.reduce((sum,num) => sum + num , 5)
console.log(redArr);
