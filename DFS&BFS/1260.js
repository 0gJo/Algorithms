import Queue from '../DataStructure/Queue.js';

//첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 
// 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

// 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

// N M V
// 4 5 1
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4

let g ;

const addNode = function(from, to, g){
    if(!g[from]){
        g[from] = [to];
    }else{
        g[from].push(to);
    }
}

const makeGraph = function(n, mArr){
    g = new Array(n+1); //0을 포함해서 정점 갯수(최대 1000) +1 만큼의 길이를 가질 수 있다.

    mArr.forEach(m => {
        const node1 = m[0], node2 = m[1]; //양방향 초기화 
        addNode(node1,node2,g);
        addNode(node2,node1,g);
    });

    console.log(g);
}

const main = function(n, m, v, mArr){

    //주어진 노드와 간선을 (=그래프를) 자료구조로 표현한다.
    //링크드 리스트로 표현 (한 노드에 연결된 정점들을 리스트로 표현)

    // [
    //     [2,3,4],
    //     [1,4],
    //     [1,4],
    //     [1,2,3]
    // ]


    makeGraph(n, mArr);


    //dfs로 탐색한다.
    //dfs란, 모든 정점을 한번씩 방문하되 갈수있는 곳 까지 최대한으로 방문하는 것을 의미한다.


    let curIdx = v;
    const checked = new Array(n+1); checked.fill(false);
    //const stack = new Array(n);

    dfs(curIdx, checked);
    bfs(curIdx, n)


}

const dfs = function(idx, checked){ //idx 번째 노드에 연결된 노드리스트를 탐색한다.
    console.log(idx);
    checked[idx] = true;
    //stack.push(idx);
    for (let i = 0; i < g[idx].length; i++) {
        const node = g[idx][i];
        if(!checked[node]){ //방문한 적 없으면 
            dfs(node, checked);
        }
        //방문한적 있으면 continue
    }
    //모두 다 돌아서 갈데가 없으면 이전 호출단계로 돌아가기 
    //return;
}


//큐 : 방문할 노드 리스트
//check : 큐에 담았는지 여부 
const bfs = function(s,n){ //반복문을 사용한다. (재귀 아님)

    // 큐의 제일 앞에 있는 노드 pop 

    //해당 노드에 연결된 노드 리스트들을 순회하며 큐에 넣지 않았으면 (checked == false) 넣는다.

    //큐에 넣고 checked == true 표시한다.

    // 노드리스트 순회(큐에 담는 작업)가 끝나면 다시 처음으로 돌아가서 큐의 노드를 pop

    //...

    //큐가 빌때까지 계속 한다. 


    const q = new Queue();
    const checked = new Array(n+1); checked.fill(false);
    //초기화
    q.enqueue(s); checked[s] = true;


    while (!q.isEmpty()) {
        const x = q.dequeue();
        console.log(x);

        for (let i = 0; i < g[x].length; i++) {
            const y = g[x][i];
            if (!checked[y]) {
                q.enqueue(y);
                checked[y] = true;
            }

        }
    }









}


let n = 4, m = 5, v = 1;
let mArr = [[1,2],[1,3],[1,4],[2,4],[3,4]];

main(n,m,v, mArr);