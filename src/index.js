module.exports = function reverse(n) {

    let i = n
    let result = 0

    while (i != 0) {
        result = (10 * result) + (i % 10)
        i = Math.trunc(i / 10)
    }
    if (n < 0) {
        return result * -1
    }
    return result
}
