


//m : 몇개 뽑을 건지 
const main = function (n, m) {

    const numbers = Array.from({ length: n }, (v, i) => i + 1); //1~n까지 배열

    //index자리 수를 뽑을지 안뽑을지 결정한다.
    const go = function (index, choice) {

        if (choice.length === m) {
            console.log(choice);
            return;
        }

        //추가
        if(index >= n) return;
        

        const num = numbers[index];

        //변하는 것
        //뽑은 수, index

        //뽑는다면
        choice.push(num);

        go(index + 1, choice);

        //뽑지 않는다면
        choice.pop();

        go(index + 1, choice);

        //뽑지 않는다면
        //choice.pop();

        //go(index + 1, choice);


        //....


    }

    go(0, []);


}

main(4, 2);