/**
 * title : 1이 될때까지 
 * @param {*} n 타겟 숫자
 * @param {*} k 나누는 숫자
 * @returns 
 */
function solution(n, k) {
    let count = 0;

    while (n > 1) {
        if (n % k === 0) {
            n = n / k;
        } else {
            n = n - 1;
        }

        count++;
    }
    return count;
}

console.log(solution(25,3));