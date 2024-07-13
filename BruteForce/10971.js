
//배열 a의 다음 순열을 만들며 다음 순열이 있는 경우 true, 아님 false 반환
const next_permutation = function (a) {
    // 1 2 3 4
    // 1 2 4 3 
    // 1 3 4 2 
    // 1 3 2 4 

    //4 3 2 1 
    //1. 끝에서 부터 i-1 < i인 경우를 찾는다.
    let i = a.length - 1;
    while (i > 0 && a[i - 1] >= a[i]) {
        i--;
    }

    if (i == 0) return false;
    //2. i-1과 바꿀 j를 구한다.
    //j는 끝에서부터 i까지 수중 i-1보다 큰 가장 작은 수(내림차순 가정)
    let j = a.length - 1;
    while (a[i - 1] >= a[j]) {
        j--;
    }

    //3. 둘을 바꾼다.
    let temp = a[i - 1];
    a[i - 1] = a[j];
    a[j] = temp;

    // 1 3 4 2 
    // 1 3 2 4 

    //4. 마지막부터 i까지를 오름차순으로 정렬
    let k = a.length - 1;
    while (k > i ) {
        let temp = a[k];
        a[k] = a[i];
        a[i] = temp;
        k--;
        i++; //이부분 신경쓸것
    }


    return true;
}

const main = function (n, w) {

    let a = Array.from(new Array(n), (e, i) => i);

    // [0, 1, 2, 3]
    let min = null;
    do {
        //console.log(a);
        let isImpossible = false;
        //w[3][0] + w[0][1] + w[1][2] + w[2][3]

        // let result = a.reduce((pval,cval, idx)=> pval + w[idx][idx+1], w[a.length-1][a[0]]);

        let result = w[a[a.length - 1]][a[0]];

        if(result == 0) isImpossible = true;

        for (let i = 1; i < a.length; i++) {
            let cost = w[a[i - 1]][a[i]];
            if(cost == 0){
                isImpossible = true;
                break;
            }
            result += cost;
        }

        if(isImpossible) continue;

        min = (min == null ? result : (min > result ? result : min));

    } while (next_permutation(a))

    console.log(min);

}

let n = 4;
let w = [
    [0, 10, 15, 20],
    [5, 0, 9, 10],
    [6, 13, 0, 12],
    [8, 8, 9, 0]
];

main(n, w);
