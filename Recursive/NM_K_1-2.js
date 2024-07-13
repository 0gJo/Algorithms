



const main = function (n, m, k, mat) {

    let max = Number.MIN_SAFE_INTEGER;
    const check = Array.from( new Array(n), ()=> new Array(m));

    //수를 뽑는다
    const go = function (sum, count, start_x, start_y) {
        //break step
        if (count === k) {
            max = (max <= sum ? sum : max);
            return;
        }

        //recursive step
        for (let i = start_x; i < mat.length; i++) {
            const row = mat[i];
            for (let j = start_y; j < row.length; j++) {
                const num = row[j];

                // 안뽑을때 
                // i, j 기준으로 상하좌우 돌면서 check 배열 true 인것 있으면 continue
                if (isAdjacent(i, j, check)) {
                    continue;
                }

                // 뽑을때 
                check[i][j] = true;
                const nx = (i+1>=m? 0 : i+1);
                const ny = (i+1>=m? j+1 : j);
                go(sum + num, count + 1, nx, ny);
            }

        }


    }

    const isAdjacent = function (base_x, base_y) {

        const x_move = [-1, 1, 0, 0];
        const y_move = [0, 0, -1, 1];

        for (let i = 0; i < x_move.length; i++) {
            const x = base_x + x_move[i], y = base_y + y_move[i];
            if (check[x][y]) {
                return true;
            }

        }

        return false;
    }


    go(0,0,0,0);
    console.log(max);

}


const matrix =
    [
        [1, 9, 8, -2, 0]
        [-1, 9, 8, -3, 0],
        [-5, 1, 9, -1, 0],
        [0, 0, 0, 9, 8],
        [9, 9, 9, 0, 0],
    ]



main(5,5,3,matrix);