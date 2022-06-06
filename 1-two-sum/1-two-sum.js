/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let twoNums = [];
    
    // 배열에서 하나의 수를 선택한다.
    nums.forEach((num, idx) => {
        // target number와 선택한 수를 뺀 값이 배열에 존재하는지 확인한다.
        let sub = target - num;
        
        if (sub === num) {
            let second = nums.indexOf(sub, idx+1);
            if (second > 0) {
                // 선택한 수의 인덱스를 삽입
                twoNums.push(idx);        
                twoNums.push(second);
            } 
        } else {
            let second = nums.indexOf(sub);
            if (second > 0) {
                // 선택한 수의 인덱스를 삽입
                twoNums.push(idx);        
                twoNums.push(second);
            } 
            twoNums = [ ...new Set(twoNums)]
        }
    })
    // 존재하면 해당 값과 선택한 수를 배열로 반환한다.
    return twoNums;
};