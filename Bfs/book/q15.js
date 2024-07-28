

/**
 * another aproach : visit과 len을 동일한 용도로 사용한다. 
 * @param {*} x 
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
function solution(x=1,n=4,k=2,r=[[1,2],[1,3],[2,3],[2,4]]) {


    let result = -1;

    // const graph = [
    //     [],
    //     [2, 3],
    //     [3, 4],
    //     [],
    //     []
    // ];

    const graph =Array.from({length:n+1},()=>[]);//(new Array(n+1)).fill([]);
    r.forEach(([start,end])=>{
        graph[start].push(end);
    });
    console.log(graph)

    const q = [];
    q.push([x,0]);
    const visit = (new Array(n)).fill(false);
    visit[x] = true;

    while(q.length > 0){
        const [idx, len] = q.shift();

        if(len == k){
            result =  idx;
            break;
        }

        const linkedNodes = graph[idx];
        linkedNodes.forEach((nodeIdx)=>{
            if(!visit[nodeIdx]){
                q.push([nodeIdx,len+1]);
                visit[nodeIdx]= true;
            }
        });

    }

    return result;

}

console.log(solution());

//bfs

//넣는 node는 [idx, len] 으로 index 뿐만 아니라 root node로 부터 idx까지의 거리를 저장


/**
 * 1. queue에 첫번째 요소를 넣는다. 1
 * 2. visit[1] = true;
 * 3. while(!q.isEmpty()){
 *      const node = q.pop();
 *      const linkedNodes = graph[node];
 *      linkedNodes.forEach((e,i)=>{
 *          if(!visit[e]){
 *              q.push(e);
 *              visit[e] = true;
 *          }
 *      });
 * 
 * }
 * 
 */