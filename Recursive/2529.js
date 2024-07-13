

let min = 9999999999, max = 0;


const main = function(n, signStr){

    const sign = signStr.split(' ');

    const check = new Array(10); check.fill(false);

    fill(-1, [], sign, check);

    console.log(min);
    console.log(max);



}

const fill = function(prev, array, sign, check){

    if(array.length == sign.length + 1){
        //console.log(array);
        const num = parseInt(toStr(array));
        
        min = (num < min? num: min);
        max = (num > max ? num : max);
        return;
    }


    const s = sign[array.length-1];

    for (let i = 0; i < 10; i++) {
        if(prev == -1 || (!check[i]&&isSatisfied(s,i,prev))){
            array.push(i);
            check[i]= true;
            fill(i,array,sign,check);
            array.pop();
            check[i] = false;
        }
        
    }

}

const toStr = function(array){
    let str = '';
    array.forEach(element => {
        str += element;
    });
    return str;
}

const isSatisfied = function(sign, num, prev){
    const result = (sign == '>'? prev > num : prev < num);
    return result;
}


main(2,'< >')