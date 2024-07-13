const main = function(array){

    let max; 

    array.sort();

    do {

        let sum  = get_gap_sum(array);

        if(!max){
            max = sum;
            continue;
        }

        max = (sum > max ? sum : max);
        
    } while (next_permutation(array));


    console.log(max);


}


const get_gap_sum = function(array){

    let sum = 0;

    for (let i = 0; i < array.length - 1 ; i++) {
        sum += Math.abs(array[i] - array[i+1]);
    }

    return sum;

}




//현재 array에 들어 있는 순열을 다음 순열로 변경하고 true를 반환. 다음 순열이 없으면 false 반환 
const next_permutation = function(array){

    // 1 2 3 4 

    //1 2 4 3 

    //1. 뒤에서 부터 돌면서 array[i-1] < array[i] 인 경우 찾기 
    let i = array.length - 1;

    while (i>0 && array[i-1] >= array[i]) {
        i--;
    }
   
    if(i <= 0) return false; //i == 0 이면 다음 순열 없음.


    //현재 array는 array[0 ~ i-1] 로 시작하는 마지막 순열 

    //2. 뒤에서 부터 array[i-1] 보다 크면서 뒤에있는 수 중 가장 작은 수를 찾는다.(array[j])
    //어차피 내림차순 되어있으므로 뒤에서부터 보면서 제일 먼저 조건을 만족하는 수가 가장 작은 수임 
    let j = array.length - 1;

    while (array[i-1] >= array[j]) {
        j--;
    }

    //3. array[j] <-> array[i-1] 바꾼다.
    let temp = array[i-1];
    array[i-1] = array[j];
    array[j] = temp;

    //4. array[i] ~ array[끝] 오름차순으로 변경 

    //    i-1  i     k
    // 7 2 3 | 6 5 4 1 
    //         1 5 4 6 
    //           i k
    //         1 4 5 6 


    let k = array.length - 1;

    while (i < k) {
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
        i++;
        k--;
    }
    
    return true;



}


main([20 ,1 ,15, 8, 4 ,10]);





