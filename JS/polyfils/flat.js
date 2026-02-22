Array.prototype.flatX = function(depth = 1) {
    if (!Array.isArray(this)) return []
    let result = []

    for (let e of this) {
        if (Array.isArray(e) && depth > 0) {
            result.push(...e.flatX(depth-1))
        } else {
            result.push(e)
        }
    }
    return result
}

let nums = [1,[2,[3,4],5],6]

let flatArr = nums.flatX(1)
console.log(flatArr);
