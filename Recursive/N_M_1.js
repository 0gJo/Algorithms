


//m : 몇개 뽑을 건지 
const main = function (n, m) {

    const numbers =  Array.from({ length: n }, (v,i) => i+1); //1~n까지 배열
    const choice = new Array(m);
    const checked = Array.from({ length: n }, (v,i) => false);


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
            if (!checked[i]) { //중복없이 
                choice[index] = num;
                checked[i] = true;
                go(index + 1);
                checked[i] = false;
                //예를 들어, 1로 시작하는 모든 경우를 끝내고, 다음 2로 시작하는 경우에서 1을 사용할 수 있어야함. 
                // 하지만, 다음수가 2 1 이 아닌 2 3을 출력하는 경우는 불필요함.
                // 정정 : 반드시 체크해야함. 그렇지 않으면 2 []를 할떄 2가 이미 true이므로 시작조차 못함
            }

        }
    }

    go(0);

} 

main(4,2);