/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // 입력값: 정수 3개
    // 출력값: 정수 = 삼각형 둘레
    
    // 가장 큰 값 < 나머지 두 값의 합
    nums.sort((a, b) => b - a);
    // const [a, b, c] = nums;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] < nums[i+1] + nums[i+2]) {
            return nums[i] + nums[i+1] + nums[i+2];
        }
    }
    return 0; 
};