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
// [
    //     [2,3,4],
    //     [1,4],
    //     [1,4],
    //     [1,2,3]
    // ]

    makeGraph(n, mArr);

    let curIdx = v;
    const checked = new Array(n+1); checked.fill(false);


    for (let i = 1; i <= n; i++) {
        if(!checked[i]){
            dfs(i,checked);
        }
        
    }


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
   //return 하지않아도 dfs함수가 끝났으므로 호출한 곳으로 돌아감 
}



let n = 4, m = 5, v = 1;
let mArr = [[1,2],[1,3],[1,4],[2,4],[3,4]];

main(n,m,v, mArr);