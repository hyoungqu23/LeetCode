/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = (n).toString().split('');
    
    let sumOfDigits = arr.reduce((acc, curr) => acc += +curr, 0);
    let productOfDigits = arr.reduce((acc, curr) => acc *= curr, 1);
    
    return productOfDigits - sumOfDigits;
};