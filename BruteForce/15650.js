//4 2

/*
1 2
1 3
1 4
2 3
2 4
3 4
*/


/*
1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3
*/



// nPm 
const main =  function(n, m){

    const check = new Array(n+1); check.fill(false);
    let place = 1;
    //let result = [];

    recur(n, m, place, check, null,  []);

}


//1~n 숫자중 place에 위치할 숫자를 선택해라. 단 check에서 그 숫자가 이미 쓰였으면 안됨.
// + 이전 자릿수보다 커야함 
const recur = function(n, m, place, check, prev, result){

    if(place > m){
        console.log(result);
        return;
    }

    for (let i = 1; i <=n ; i++) {
        
        if(!check[i]){
            if(prev == null ||  i > prev){
                check[i] = true; result.push(i);
                recur(n,m,place+1,check, i, result);
                check[i]= false; result.pop();
            }
        }
    }
}

main(4,2);