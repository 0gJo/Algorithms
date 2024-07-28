
function solution(n, build_frame){
    let answer = [];
    build_frame.forEach(([x,y,stuff,operate])=>{
        if(operate === 0){
            answer = removeItem([x,y,stuff],answer);
            if(!possible(answer)){
                answer.push([x,y,stuff]);
            }
        }else{
            answer.push([x,y,stuff]);
            if(!possible(answer)){
                answer = removeItem([x,y,stuff],answer);
            }
        }
    })

    return answer;
}

function possible(answer){

    for(let i = 0; i < answer.length; i++){
        const [x,y,stuff] =  answer[i];
        if(stuff === 0){
            if(y === 0 || containItem(answer,[x-1,y,1]) || containItem(answer, [x,y-1,0] || containItem(x,y,0))){
                continue;
            }else{
                return false;
            }
        }else{
            if( containItem(answer,[x,y-1,0]) || containItem(answer, [x+1,y-1,0]) || containItem(answer,[x+1,y,1])|| containItem(answer,[x-1,y,1])){
                continue;
            }
            else{
                return false;
            }
        }
    }

    return true;
}


function removeItem(item, arr){
    const [ix, iy, istuff] = item;
    return arr.filter(([x,y,stuff])=>(!(x===ix && y === iy && istuff === stuff)));
}

function containItem(array, item) {
    const [ix,iy,istuff] = item;
    return array.some(([x,y,stuff]) => (x===ix && iy ===y && istuff === stuff) );
  }



  console.log(solution(5,[[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]))