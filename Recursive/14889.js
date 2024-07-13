





const main = function(n, s){

    const check = new Array(n); check.fill(false);
    const array = [];
    const members = [];
    const numbers = Array.from({length : n}, (_,i)=> i);

    go(n/2,check,array,members,numbers);
    console.log(members);


}


//array 요소 갯수가 target개가 될때까지 자리가 중복되지 않도록 수를 만듦 
//각 자리 수가 될 수 있는 수는 numbers에 있는 수
const go = function(target,check,array,members,numbers){

    if(array.length == target){
        //array.sort();
        let fakeArray = Object.assign([], array);
        fakeArray.sort();
        let m = makeStr(fakeArray);
        if(members.indexOf(m) == -1){
            members.push(m);
        }
        return;
    }
    

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if(!check[num]){
            check[num] = true;
            array.push(num);
            go(target,check,array,members,numbers);
            array.pop();
            check[num] = false;
        }
        
    }

}

const makeStr = function(array){
    let str = '';
    array.forEach(element => {
        str+=element;
    });
    return str;
}


main(6,[]);