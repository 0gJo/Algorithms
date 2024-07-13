
//n을 1로 만드는 최소 연산의 횟수 
//count 현재 시점까지의 연산 횟수
const go = function(n,count, arr){
    // base : 재귀를 멈추는 시점 
    if(n === 1){ 
        return count;
    }

    //memoization step : 이미 결과가 있다면 사용 
    if(arr[n]){
       
        return arr[n];
    }

    // recursive step : 계속 depth 키우면서 재귀호출

    let cArr = [];
    let m3, m2, m1;
    //3으로 나누기
    if(n%3 === 0){
       m3 =  go(n/3, count+1,arr);
       cArr.push(m3);
    }
    //2로 나누기
    if(n%2 === 0){
        m2 = go(n/2, count+1,arr);
        cArr.push(m2);
    }
    //1을 빼기 
    m1 = go(n-1, count+1,arr); //절대 count ++ or ++ count 하지 않기 
    cArr.push(m1);


    let min =  Math.min(...cArr);
    arr[n] = min;

    return min;

}



const main = function(n){

    const arr = new Array(n+1);
   
    console.log(go(n,0,arr));

}

main(2);



// up(n) : n -> 1으로 만드는 최소 연산 횟수
// up(n) = min( up(n-1) , up(n/2), up(n/3) )  + 1
// 단, up(1) = 1 (d[1] = 1)
// 결과값을 저장할 배열이 필요함 : d
const up = function(n){
    const d = new Array(n+1);
    d[1] = 1;
    //up(1)은 구해져 있으므로 다음 up(2)부터 구한다.

    //d[i]를 정하는 과정
    for (let i = 2; i <= n; i++) { 
        let min = d[i-1] + 1;
        if(i%2 === 0){
            let c = d[i/2] + 1;
            min = (min >= c ? c : min);
        }

        if(i%3 === 0){
            let c = d[i/3] + 1;
            min = (min >= c ? c : min);
        }

        d[i] = min;

    }

    return d[n];
}


console.log(up(10))