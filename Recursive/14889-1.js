

const start = [];
const link = [];

const main = function(n, s){

    go(1,n);


}


//array 요소 갯수가 target개가 될때까지 자리가 중복되지 않도록 수를 만듦 
//각 자리 수가 될 수 있는 수는 numbers에 있는 수
const go = function(idx, n){
    console.log(idx);
    console.log(start);
    console.log(link);

    if(idx == n+1){
        if(start.length == n/2 && link.length == n/2){
            console.log('---');
        }
        return;
    }


    start.push(idx);
    go(idx+1, n);
    start.pop();


    link.push(idx);
    go(idx+1, n);
    link.pop();

}



main(4,[]);