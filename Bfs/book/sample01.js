function main(n, m, graph) {


    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    //시작점
    function bfs(x, y) {
        const queue = [];
        queue.push([x, y]);
        while (queue.length) {
            let [x, y] = queue.shift();

            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (nx < 0 | ny < 0 | nx >= n | ny >= m) {
                    continue;
                }
                //벽인경우 무시
                if (graph[x][y] == 0) {
                    continue;
                }

                if (graph[nx][ny] == 1) {
                    graph[nx][ny] = graph[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        return graph[n-1][m-1];
    }

}