//주어진 숫자까지의 모든 숫자 더하기
//숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.


// 가장 먼저 생각난 방법 
const sumTo_1 = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


// sumTo(1) = 1;
// sumTo(2) = 1 + 2;
// sumTo(3) = 1 + 2 + 3;
// sumTo(n) = sumTo(n-1) + n;

// sumTo(n) : 1부터 n까지의 합...
const sumTo_2 = function (n) {
    if (n === 1) { return 1 };
    return sumTo_2(n - 1) + n;
}


// 등차수열 
const sumTo_3 = function(n){
    return n*(n+1)/2;
}

let t1 = new Date();
console.log(sumTo_1(10000));
let t2 = new Date();
console.log( t2-t1); // 속도 2등

let t3 = new Date();
console.log(sumTo_2(10000));
let t4 = new Date();
console.log( t4-t3); // 속도 3등

let t5 = new Date();
console.log(sumTo_3(10000));
let t6 = new Date();
console.log( t6-t5); // 속도 1등