
const main = function(n){
    const m = Array.from(Array(n), () => new Array(n));
    fill(0,0,n,m);
    console.log(m);

}

const fill = function (x, y, N, m) {

    if( N === 1){ 
        m[x][y] = '*';
        return;
    }

    for (let j = y; j < y + N; j= j+N/3) {  // j+N/3

        for (let i = x; i < x + N; i=i+N/3) { // i + N/3

            if ( (x + N/3 <= i && i < x + 2*N/3) && (y + N/3 <= j && j < y + 2*N/3)) { // 중간영역
                continue;

            }

            fill (i,j, N/3, m);

            // if(N == 1 ) m [i,j] = * ;

            // else  fill (i,j, N/3, m) 



        }

    }

}


main(9);