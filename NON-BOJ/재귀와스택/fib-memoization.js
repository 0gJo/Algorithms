









// arr[n-1]에 채워 넣을 fib(n)
const main = function(n){

    let arr = new Array(n); //배열 값들 undefined로 초기화
    arr[0] = 1;
    arr[1] = 1;

    const fib = function(n){
        // base : 더 깊이 있게 들어가는 것(즉, 재귀 호출)을 stop 하는 조건 
        if(arr[n-1]){ // n = 1, 2 처럼 이미 존재하면 아래처럼 더 깊은 depth로 들어갈 일이 없으므로
            return arr[n-1]; //n이 음수가 된다거나 하는 조건을 고려할 필요가 없다.
        }
        let fib_n = fib(n-1) + fib(n-2);
        arr[n-1] = fib_n;
        return fib_n;
    }

    let t1 = new Date();
    console.log(fib(n));
    let t2 = new Date();
    console.log(t2-t1); 
    console.log(0.001 * (t2-t1));
}

main(77);