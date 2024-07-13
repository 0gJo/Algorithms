


//m : 몇개 뽑을 건지 
const main = function (n, m) {

    const numbers =  Array.from({ length: n }, (v,i) => i+1); //1~n까지 배열
    const choice = new Array(m);

    //go(index) : index 자리를 뽑는다.
    const go = function (index) {
        //break step
        if (index === m) {
            console.log(choice);
            return;
        }


        //recursive step
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
                choice[index] = num;
                go(index + 1);
        }
    }

    go(0);

} 

main(4,2);