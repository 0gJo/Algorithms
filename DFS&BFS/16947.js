import Queue from '../DataStructure/Queue.js';

//그래프 만들기 
let g;

const addNode = function (from, to, g) {
    if (!g[from]) {
        g[from] = [to];
    } else {
        g[from].push(to);
    }
}

const makeGraph = function (n, mArr) {
    g = new Array(n + 1); //0을 포함해서 정점 갯수(최대 1000) +1 만큼의 길이를 가질 수 있다.

    mArr.forEach(m => {
        const node1 = m[0], node2 = m[1]; //양방향 초기화 
        addNode(node1, node2, g);
        addNode(node2, node1, g);
    });

    console.log(g);
}


const main = function (n, mArr) {

    const checked = new Array(n + 1);


    makeGraph(n, mArr);


    dfs(1, 0, checked);

    console.log(checked);

    //[empty, 2, 2, 2, 1, empty, 1]

    const q = new Queue();
    const dist = new Array(n+1); dist.fill(-1);



    for (let i = 0; i < checked.length; i++) {
        if(checked[i]&&checked[i] == 2){
            q.enqueue(i); dist[i] = 0;
        }
    }

    console.log(dist);

    while (!q.isEmpty()) {
        const x =  q.dequeue();

        for (let i = 0; i < g[x].length; i++) {
            const y = g[x][i];
            if(dist[y] == -1){ //순환선에 속한점이 아니면 && dist를 기록한적 없다면
                q.enqueue(y);
                dist[y]= dist[x]+1;
            }
            
        }

    }
    console.log(dist);


}



const dfs = function (x, p, check) {

    if (check[x] == 1) {
        return x;
    }
    check[x] = 1;
    for (let i = 0; i < g[x].length; i++) {
        let y = g[x][i];
        console.log(x,y);
        if (y == p) {
            //console.log('pass');
            continue;
        }
            //console.log(`dfs(${y},${x})`);
            let res = dfs(y, x, check);
        if (res == -2) return -2;
        if (res >= 0) {
            check[x] = 2;
            if (x == res) return -2;
            else return res;
        }
    }
    //console.log(-1);
    return -1;

}

let n = 6;
let mArr =
    [
        [1, 2],
        [3, 4],
        [6, 4],
        [2, 3],
        [1, 3],
        [3, 5]
    ];


main(n, mArr);

