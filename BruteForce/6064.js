//카잉 달력


//10 12 3 9

// 1 2 3 4  5 6 7 8  9 10 11 12  13 14 15

// 1 2 3 1  2 3 1 2  3 1  2  3   1  2  3
// 1 2 3 4  1 2 3 4  1 2  3  4   1  2  3 

// 1 2 3 4 5 6 7 8 9 10 1  2  3  4  5  
// 1 2 3 4 5 6 7 8 9 10 11 12 1  2  3  4  5 

// (year - 1) % 10 + 1  = x 
// (year - 1) % 12 + 1  = y

// year을 매번 증가시키다가 위의 결과로 도출한 x,y값이 발견되면 year 리턴 


// 












const main = function (m, n, x, y) {

    const check_y = new Array(n); check_y.fill(false);

    let year = x;

    while ( year <= m * n ) {

        year = year + m;

        let c_y = ( year - 1 ) % n + 1;

        if(c_y == y) return year;

    }

    return -1;

    // 주어진 값을 절대로 만들수 없는 경우 ? 
    // break를 멈출 조건 ?
    // 언제까지 비교해야하나?
    // => n*m 즉 최소공배수마다 반복되므로  


}


console.log(main(10,12,7,2));
