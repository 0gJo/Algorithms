

//직전 값을 저장 해놓을 배열이 필요하다.
//n번째에 들어갈 숫자를 채우는 함수
//n자리를 채울때 가능한 모든 이친수의 갯수 
const go = function(n, N, arr){

    if(n === N){
        return 1;
    }

    let count = 0;
    //직전 자리수 
    if(arr[n-1] === 1){
        arr[n] = 0;
        count += go(n+1,N,arr);
    }else{
        arr[n] = 0;
        count += go(n+1,N,arr);

        arr[n] = 1;
        count += go(n+1,N,arr);
    }
  
    return count;

}


const main = function(N){


    const arr = new Array(N);
    arr[0] = 1; // 반드시 1로 시작한다.

    console.log(go(1,N,arr));

}

main(5);
