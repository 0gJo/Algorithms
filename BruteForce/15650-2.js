//4 2

/*
1 2
1 3
1 4
2 3
2 4
3 4
*/


/*
1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3
*/



// nPm 
const main = function (n, m) {

    let place = 1;

    recur(n, m, place, 1, []);

}

const recur = function (n, m, place, start, result) {

    if (place > m) {
        console.log(result);
        return;
    }

    for (let i = start; i <= n; i++) {

        result.push(i);
        recur(n, m, place + 1, i+1, result);
        result.pop();

    }
}

main(4, 4);