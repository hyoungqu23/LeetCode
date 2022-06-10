/**
 * @param {number[]} arr
 * @return {boolean}
 */
let canMakeArithmeticProgression = function(arr) {
    // 입력 값: 숫자로 이루어진 배열
    // 출력 값: Boolean(isArithmetic)
    // 입력 배열을 오름차순 정렬한 후, 각각의 difference가 일치하면 isArithmetic = true
    
    let isArithmetic = true;
    
    // 입력 배열의 오름차순 정렬
    arr.sort((a, b) => a - b);
    
    // 첫 두 수의 차이
    let difference = arr[1] - arr[0] 
    
    // 각각의 차이가 일치하는 지 확인
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== difference) {
            isArithmetic = false;
        }
    }
    
    return isArithmetic
};