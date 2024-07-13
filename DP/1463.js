
//1로 만들기 
//배열 이용하면 메모리 차지 너무 많이해서 map 사용
const map = new Map();



//n을 1로 만드는 최소 방법수
const f = function(n){

    if(n === 1) return 0;

    const b = n-1; //항상 가능

    //2 또는 3으로 나눌 수 있으면, 나눈값.
    const a = (n % 2 === 0? n/2 : (n % 3 === 0? n/3 : null));

    if(map.has(n)) return map.get(n); 

    let result = ( a === null ? f(b) + 1 : Math.min(f(a), f(b)) + 1 );

    map.set(n, result);

    return result;
}



console.log(f(2));
