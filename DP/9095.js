


const memo = new Array(12); memo.fill(0);

const f = function(n){

    if(n===1) return 1;
    if(n===2) return 2;
    if(n===3) return 4;

    if(memo[n] !== 0) return memo[n];

    const result = f(n-1)+f(n-2)+f(n-3);
    memo[n] = result;
    return result;
}



console.log(f(10));