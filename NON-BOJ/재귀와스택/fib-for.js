


//배열에 저장하는 방법

//fib(n) : index = n-1인 배열에 넣을 값.

// 배열 채워 넣기

const fib = function(n){
    const array = [ 1, 1 ];
    for (let i = 2; i < n; i++) {
        array[i] = array[i-1] + array[i-2];        
    }
    return array[n-1];
}

let t1 = new Date().getMilliseconds();
console.log(fib(77));
let t2 = new Date().getMilliseconds();
console.log(t2-t1); 
console.log(0.001 * (t2-t1));