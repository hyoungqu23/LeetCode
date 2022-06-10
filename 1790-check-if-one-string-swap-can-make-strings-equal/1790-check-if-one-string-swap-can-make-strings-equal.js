/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    // 입력 값 : 문자열 2개
    // 출력 값 : Boolean(isEqual)
    // s1 === s2인 경우 return true;
    let isEqual = false;
    
    if (s1 == s2) isEqual = true;
        
    // 아닌 경우
    // 딱 2글자만을 바꿨을 때 reversed_s1 === s2이면 return true;
    
    // 배열화
    let arr1 = s1.split('');
    let arr2 = s2.split('');
    
    let editChar = [];
    let indexChar = [];
    
    for (let i = 0; i < s1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            editChar.push(arr1[i]);
            indexChar.push(i)
        }
    }
    arr1[indexChar[0]] = editChar[1];
    arr1[indexChar[1]] = editChar[0];
    
    let reversed_s1 = arr1.join('');
       
    // reversed_s1 === s2이면 return true;
    if (reversed_s1 == s2) isEqual = true;
    
    return isEqual;
};