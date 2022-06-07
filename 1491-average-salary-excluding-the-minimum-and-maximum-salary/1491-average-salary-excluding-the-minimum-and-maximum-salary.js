/**
 * @param {number[]} salary
 * @return {number}
 */
let average = function(salary) {
    salary.sort((a, b) => a - b).shift();
    salary.pop();
    return salary.reduce((acc, curr) => acc += curr, 0) / salary.length;
};