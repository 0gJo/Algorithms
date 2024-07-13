



const main = function (n, m, k, mat) {

    const arr = [];
    const idxArr = []; //2차원 배열

    //2차원 배열 돌기
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        for (let j = 0; j < row.length; j++) {
            const num = row[j];
            arr.push(num);
            idxArr.push([i, j]);
        }

    }

    // 1 2 3 4
    // 0 1 2 3 
    // go(idx) :  arr[idx]를 뽑는다/안뽑는다
    const choice = [];
    const go = function (idx) {
        //break step
        if (choice.length === k) {
            console.log(choice);
            return;
        }

        // ** 매우 중요 ** (맨날 까먹음)
        if (idx >= arr.length) {
            return;
        }

        //recursive step
        //뽑는다
        choice.push(arr[idx]);
        go(idx + 1);

        //안뽑는다
        choice.pop();
        go(idx + 1);

    }

    go(0);


}


// const matrix =
//     [
//         [1, 9, 8, -2, 0]
//         [-1, 9, 8, -3, 0],
//         [-5, 1, 9, -1, 0],
//         [0, 0, 0, 9, 8],
//         [9, 9, 9, 0, 0],
//     ]



// main(5,5,3,matrix);


main(1,1,1,[[1]]);


















const isMax = function (num) {
    return (num >= max);
}

// 배열에 있는 [x1,y1] [x2,y2] [x3,y3] ...가 인접한지 아닌지 확인
// 각 좌표 요소에 대해 항상 1:1로 비교해야하는데 시간복잡도 증가...
// 각 좌표 요소의 인접한 칸을 모두 모은 뒤, 그 중에 각 좌표요소가 포함되어 있으면 인접한 칸이 하나라도 있는 것
// k의 최댓값은 4이기 때문에 부담 x

const isAnyAdjacent = function (posArr) {
    const all = [];
    posArr.forEach(pos => {
        all.concat(getAdjPosArr(pos));
    });


}

const getAdjPosArr = function (pos) {
    const x = pos[0], y = pos[1];
    return [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
}