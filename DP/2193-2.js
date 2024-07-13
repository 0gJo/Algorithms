// N자리 이친수의 개수
// d[i, j] :길이가 i고 끝자리가 j인 이친수의 갯수 

// d[i, 1] = d[i-1, 0]
// d[i, 0] = d[i-1, 0] + d[i-1, 1]

// 단, d[1,1] = 1, d[1,0] = 0

// 그냥 점화식이 2개 있다고 생각하면 되는건가...



const main = function(n){

    const d = Array.from(Array(n+1), () => new Array(n+1));
    d[1][1] = 1;
    d[1][0] = 0;
    
    
    for (let i = 2; i <= n ; i++) {
        d[i][1] = d[i-1][0];
        d[i][0] = d[i-1][0] + d[i-1][1];
    }
    
    console.log(d);
    console.log(d[n][1] + d[n][0]);

}

main(5);