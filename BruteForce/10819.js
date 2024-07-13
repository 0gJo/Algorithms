










let max = 0;


const main = function(numbers){

    const check = new Array(numbers.length); check.fill(false);
    const array = new Array(numbers.length);

    dfs(0,numbers,check,array);
    console.log(max);


}

const dfs = function(place, numbers, check, array){

    if(place >= numbers.length){
        let diffSum = getDiffSum(array);
        max = (diffSum > max ? diffSum : max);

        return;
    } 


    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if(!check[i]){
            check[i] = true;
            array[place] = num; 
            dfs(place+1, numbers, check, array);
            check[i] = false;
        }
    }
}

const getDiffSum = function(array){

    let sum = 0;

    for (let i = 0; i < array.length-1; i++) {
        sum += Math.abs(array[i] - array[i+1]);
    }

    return sum;
}


main([20 ,1 ,15 ,8 ,4 ,10]);