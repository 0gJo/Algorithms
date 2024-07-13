function solution(arr) {
    var answer = 0;

    //가장 작은 수 m 부터 차례로 m 보다 큰 수들의 연속된 index를 찾아서 m이 되도록 쭉 더한다.

    //연속되지 않았다면 그 m 값이 되어야하는 arr의 수만 채운다. (1개일수도 있고 여러개일수도 있음)

    //1개인 경우 다음 m을 찾고, 여러개인 경우 다 채울때 까지 반복 (stack이 끝날때 까지 )

    //내림차순 정렬 
    let arr1 = [];

    arr.forEach((elm)=>{
        if(!arr1.includes(elm)) arr1.push(elm);
    })
    
    arr1.sort((a, b) => b - a);

    //한번 돌때마다 m을 채우기 위해 필요한 횟수를 계산 
    while (arr1.length !== 0) {

        console.log(arr1);
        let m = arr1.pop();

        let continuousIdx;
        let cnt = 0;

        arr.forEach((num, idx) => {
            if (continuousIdx == null && num >= m) {
                continuousIdx = idx;
                if (num == m) cnt++;
            }

            if (continuousIdx !== null && num > m) {
                if (idx !== (continuousIdx + 1)) {
                    if (num == m) cnt++;
                }
            }
        })

        answer += cnt;

    }



    return answer;
}


console.log(solution( [1, 2, 4, 8, 4, 2, 1]));