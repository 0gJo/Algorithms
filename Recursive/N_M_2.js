


//m : 몇개 뽑을 건지 
const main = function (n, m) {

    const numbers =  Array.from({ length: n }, (v,i) => i+1); //1~n까지 배열
    const choice = new Array(m);
    //const checked = Array.from({ length: n }, (v,i) => false);


    //go(index) : index 자리를 뽑는다.
    const go = function (index, sIdx) {
        //break step
        if (index === m) {
            console.log(choice);
            return;
        }


        //recursive step
        for (let i = sIdx; i < numbers.length; i++) {
            const num = numbers[i];
            //if (!checked[i]) { //중복없이 
                choice[index] = num;
                //checked[i] = true;
                go(index + 1, i+1);
                //checked[i] = false; 
            //}

        }
    }

    go(0,0);

} 

main(4,2);