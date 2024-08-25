function main(n,m,graph) {
    let result = 0;

    function dfs(x, y) {

        if (x <= -1 | x >= n | y <= -1 | y >= m) {
            return false;
        }

        if (graph[x][y] === 0) {
            graph[x][y] = 1;
            dfs(x + 1, y);
            dfs(x, y + 1);
            dfs(x - 1, y);
            dfs(x, y - 1);
            return true;
        }
        return false;
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(dfs[i][j] === true){
                result += 1;
            }
        }
    }

}