





const main = function(n, mat){

    const checked = Array.from(Array(n), () => Array(n).fill(false));

    const dfs = function(cx,cy){
        //방문한 적 없는 인접한 노드 방문
        //        상 하 좌 우 
        const x = [-1,1,0,0];
        const y = [0,0,-1,1];
    
        for (let i = 0; i < x.length; i++) {
            const dx = x[i], dy = y[i];
            const nx = cx + dx, ny = cy + dy;
    
            //범위 안에 있고
            //방문한적 없는 노드이면
            // 1 -> 0 (X) 이 경우가 아니면
            if((nx >= 0 && nx < n && ny >= 0 && ny < n) && !checked[nx][ny] && !(mat[cx][cy] === 1 && mat[nx][ny] === 0) ){
                //방문한다.
                checked[nx][ny] = true;
                dfs(nx,ny,n);
            }
            
        }
    }

    dfs(0,0,mat);
    console.log(checked);

}

const ex_mat =[
[0,1,1,0,1,0,0],
[0,1,1,0,1,0,1],
[1,1,1,0,1,0,1],
[0,0,0,0,1,1,1],
[0,1,0,0,0,0,0],
[0,1,1,1,1,1,0],
[0,1,1,1,0,0,0]
]

main(7,ex_mat);