/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
let nearestValidPoint = function(x, y, points) {
    // 현재 위치 : (x, y)
    // 타겟 위치 배열 : points
    // Manhattan distance = Math.abs(x - pointX) +  Math.abs(y - pointY)
    // 기본 값 설정
    // 해당하는 타겟 위치가 없으면 -1
    let resultIndex = -1;
    let nearest = Infinity;
            
    // validation check: pointX = x or pointY = y
    // points.filter(([pointX, pointY]) => pointX === x || pointY === y);
    points.forEach((point, index) => {
        const [pointX, pointY] = point;

        if (pointX !== x && pointY !== y) return;

        // Manhattan distance 구하기
        const manhattanD = Math.abs(x - pointX) +  Math.abs(y - pointY);
        
        // 최소인 경우 index 반환하기
        if (nearest > manhattanD) {
            nearest = manhattanD
            resultIndex = index;
        }
    })
    return resultIndex;
};