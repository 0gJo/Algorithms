const main = function (n, no_btns) {
    //n : 최종 채널
    //no_btns : 고장난 버튼 목록

    //100에서 채널 n이 될때까지 +나 -만 눌렀을때 min_move
    let min_move = Math.abs(n - 100);

    //이용가능한 숫자들로 만들수 있는 가장 근접한 채널 찾기 
    //1. 이용가능한 숫자들로 만들수 있는 채널 찾기
    //2. 그 중 목표 채널과 가장 근접한 채널 찾기 min(|n-c|)
    for (let c = 0; c <= 1000000; c++) {

        //btns을 제외한 나머지로 만들수 있는가 

        let c_str = c + '';

        let num_move = possible(c_str, no_btns);
        if (!num_move) {
            continue;
        } else {
            //plus-minus move 
            let pm_move = Math.abs(n - c);
            let total_move = num_move + pm_move;

            if (total_move < min_move) {
                min_move = total_move;
            }

        }

        

    }


    console.log(min_move);


}

const possible = function (c_str, no_btns) {

    //c에 no_btns이 포함되어 있다면
    for (let i = 0; i < no_btns.length; i++) {
        const no_btn = no_btns[i];
        if (c_str.includes(no_btn)) return false;
    }
    //포함되어 있지 않다면 
    //숫자로 채널 c로 이동가능하다.
    return c_str.length;

}

//main(5457, [6, 7, 8]);
main(500000, [0,2 ,3 ,4 ,6 ,7 ,8 ,9]);