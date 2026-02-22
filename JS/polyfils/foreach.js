Array.prototype.forEachX = function(fn) {
    // yahan par this array ko refer kr rha hai
    let n = this.length
    for (let i=0; i<n; i++) {
        fn(this[i])
    }
}

let temp = [1,2,3,4,5]
temp.forEachX((num) => {
    console.log(`The no. is ${num}`)
}) 