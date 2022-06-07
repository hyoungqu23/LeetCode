/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let countOdds = function(low, high) {
    // 두 수 사이에 존재하는 숫자가 짝수라면,
    let distance = high - low + 1;
    
    if (distance % 2 === 0) {
        return distance / 2;
    }
    
    // 두 수 사이에 존재하는 숫자가 홀수라면,
    let result = low % 2 === 1 ? (distance + 1) / 2 : (distance - 1) / 2
    
    return result;
};