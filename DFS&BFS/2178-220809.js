

class Queue {
    constructor() {
        this._arr = [];
    }

    front() {
        return this._arr.shift();
    }

    push(item) {
        this._arr.push(item);
    }

    isEmpty() {
        return (this._arr.length === 0);
    }
}







const main = function (n, m, mz) {
    //bfs란 뭘까.
    // 시작노드와 연결된 정점들을 돌면서 queue에 담고 
    // 앞에서부터 하나씩 빼면서 위의 작업을 반복.
    //위 우측 아래 좌측 
    const y = [0, 1, 0, -1];
    const x = [-1, 0, 1, 0];

    const queue = new Queue();
    queue.push({ x: 0, y: 0 });
    const checked = Array.from(Array(n), () => Array(m).fill(0));
    checked[0][0] = 1;

    while (!queue.isEmpty()) {
        //어떤 정점이 주어지면 이 정점의 사방을 모두 탐색한다.
        const node = queue.front();

        for (let i = 0; i < x.length; i++) {
            const dx = x[i], dy = y[i]; // x,y이동 방향
            const nx = node.x + dx, ny = node.y + dy; // 이동한 다음 x,y
            //범위를 벗어나지 않고,
            //방문한적 없으며,
            //값이 1이면 
            if ((nx >= 0 && nx < n && ny >= 0 && ny < m) && checked[nx][ny] === 0 && mz[nx][ny] === 1) {
                //큐에 담기 
                queue.push({ x: nx, y: ny });
                //방문 체크 (여기서는 count를 넣는다)
                checked[nx][ny] = checked[node.x][node.y] + 1;
            }


        }
    }

    console.log(checked[n - 1][m - 1]);

}

const n = 4, m = 6;
const mz = [
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1]
];

main(n, m, mz);