

//1,2,3 을 더해서 sum을 만드는 방법의 수 
const make = function(sum){
    if(sum === 0) return 1;
    if(sum === 1) return 1;
    if(sum < 0) return 0;
    //방법의 수 
    let count = 0;
    for (let i = 1; i <= 3; i++) {
        count += make(sum - i);
    }

    return count;
}

console.log(make(4));