import Queue from '../DataStructure/Queue.js';



//큐 : 방문할 노드 리스트
//check : 큐에 담았는지 여부 
const main = function(n,m,g){ //반복문을 사용한다. (재귀 아님)

    const q = new Queue();
    //방문여부 및 거리를 나타냄
    const checked = Array.from(Array(n), () => Array(m).fill(0));

    const targetR = n-1, targetC = m-1;

    //초기화
    q.enqueue([0,0]); checked[0][0] = 1;


    while (!q.isEmpty()) {
        const rc = q.dequeue();
        const r = rc[0], c = rc[1];

        if(r == targetR && c == targetC){
            //답
            console.log(checked[r][c]);
            return;
        }

        let rList = [r,r,r-1,r+1];
        let cList = [c-1,c+1,c,c];

        for (let i = 0; i < rList.length; i++) {
            const x = rList[i], y = cList[i];
            const xValid = (x>=0&&x<n), yValid = (y>=0&&y<m);

            if(!(xValid&&yValid)) continue;

            if (g[x][y]==1 && checked[x][y]==0) {
                q.enqueue([x,y]);
                let currentChecked = checked[r][c];
                checked[x][y] = (currentChecked+1);
            }

        }
    }









}


let n = 4, m = 6;
let n3=2, m3=25;

let t1 = [
    [1,1,0,1,1,0],
    [1,1,0,1,1,0],
    [1,1,1,1,1,1],
    [1,1,1,1,0,1],
];

let t2 = [
   [1,0,1,1,1,1],
   [1,0,1,0,1,0],
   [1,0,1,0,1,1],
   [1,1,1,0,1,1],
]

let t3 = [
    [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],

]

main(n3,m3, t3);