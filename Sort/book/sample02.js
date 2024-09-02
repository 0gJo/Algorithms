function solution(arr){
    console.log(arr.sort());
    console.log(arr.sort((a,b)=>(b-a)));
}

solution([ 8, 90 , 10, 99 ]);