/**
 * @param {number[]} nums
 * @return {number}
 */
let arraySign = function(nums) {
    // 입력 값 : 숫자로 이루어진 배열
    // 출력 값 : 숫자(1, 0, -1)
    // 양수인 경우 1, 음수인 경우 -1을 곱하고 0인 경우 그냥 0으로 반환한다.
   
    // 0을 포함한 경우 그냥 0으로 반환한다.
    if (nums.includes(0)) return 0;
    
     // 사실상 음수인 숫자의 개수를 카운트해서 홀수인 경우 -1, 짝수인 경우 1 반환
    let negativeNums = nums.filter(num => num < 0);
    return negativeNums.length % 2 ? -1 : 1;
};