let g ;

const main = function(n, mArr){
    g = mArr;
    const checked = Array.from(Array(n), () => Array(n).fill(false))
    const answer = [];

    for (let i = 0; i < g.length; i++) {
        const row = g[i];
        for (let j = 0; j < row.length; j++) {
            const elem = row[j];

            if(!checked[i][j]&&elem == 1){
                const danji = [];
                danji.push([i,j]);
                dfs(i,j,checked,danji);
                answer.push(danji.length);
            }
            
        }
        
    }

    console.log(answer);

}


const dfs = function(i,j, checked, danji){ //idx 번째 노드에 연결된 노드리스트를 탐색한다.
    checked[i][j] = true;
    //좌 g[i,j-1];
    //우 g[i,j+1];
    //상 g[i-1,j];
    //하 g[i+1,j];

    const list = [[i,j-1],[i,j+1],[i-1,j],[i+1,j]];



    for (let idx = 0; idx < list.length; idx++) {
        const coords = list[idx];
        const row = coords[0], col = coords[1];

        let rowValid = row>=0&&row<g.length;
        let colValid = col>=0&&col<g.length;

        if(!(rowValid&&colValid)) continue;

        if(!checked[row][col]&&g[row][col] == 1){ 
            danji.push([row,col]);
            dfs(row, col, checked, danji);
        }
        //방문한적 있으면 continue
    }
   //return 하지않아도 dfs함수가 끝났으므로 호출한 곳으로 돌아감 
}



let n = 7;
let mArr = [
[0,1,1,0,1,0,0],
[0,1,1,0,1,0,1],
[1,1,1,0,1,0,1],
[0,0,0,0,1,1,1],
[0,1,0,0,0,0,0],
[0,1,1,1,1,1,0],
[0,1,1,1,0,0,0],
];

main(n, mArr);