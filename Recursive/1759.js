





const main = function(l, c, chars){
    chars.sort();
    console.log(chars);
    const check = new Array(c); check.fill(false);

    go(l,chars,[],check,[],[]);

}

const go = function(l, chars, array, check, vArray, cArray){


    if(array.length == l){
        //모음 1개이상, 자음 2개 이상인지 체크한다.
        if(vArray.length >= 1 && cArray.length >=2){
            console.log(array);
        }
        return;
    }


    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const prev = array[array.length-1];
        //for문으로 처음부터 다시 도는 경우, 오름차순을 체크해야함.
        if(!check[i]&&(prev ==null||prev<char)){
            //자음 배열, 모음 배열 
            let targetArray = (isVowel(char)? vArray : cArray);

            targetArray.push(char);
            check[i] = true;
            array.push(char);

            go(l, chars, array, check, vArray, cArray);
            
            targetArray.pop();
            check[i] = false;
            array.pop();
        }
        
    }

}

//모음 여부 확인 
const isVowel = function(char){
    if(['a','e','i','o','u'].indexOf(char) == -1){
        return false;
    }
    return true;
}

main(4,6,['a', 't', 'c' ,'i' ,'s' ,'w'])





