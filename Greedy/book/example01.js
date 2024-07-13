/**
 * title : 큰수의 법칙
 * my approach : 큰수 작은수의 더하기 조합을 몇번 반복하는지 + 남은 횟수 * 큰수
 * another approach : 큰수 더하는 횟수 * 큰수 + 작은수 더하는 횟수 * 작은수 
 * @param {*} n 배열의 크기
 * @param {*} m 총 더하는 횟수 
 * @param {*} k 연속해서 더할수 있는 횟수 
 * @param {*} arr 숫자 배열
 */
function solution(n,m,k,arr){
    let result = 0;
    //내림차순 정렬
    arr.sort((a,b)=> b-a);

    if(arr[0] === arr[1]){
        result = arr[0] * m;
        return result;
    }

    const addUnit = arr[0] * k + arr[1];

    const addCnt = m/(k+1), addEtcCnt = m%(k+1);

    result = addUnit * addCnt + addEtcCnt * arr[0];

    return result;

}

console.log(solution(5,8,3,[2,4,5,4,6]));
console.log(solution(5,7,2,[4,4,4,4,4]));
