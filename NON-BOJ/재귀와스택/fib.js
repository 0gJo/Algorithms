


const fib = function(n){
    if(n === 1 || n === 2){
        return 1;
    }

    return fib(n-1) + fib(n-2);
}


let t1 = new Date();
console.log(fib(77));
let t2 = new Date();
console.log(t2-t1); 
console.log(0.001 * (t2-t1));