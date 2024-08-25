function solution(n, build_frame) {
    var answer = [[]];
    
    let mat = Array.from({length : n}, ()=> (new Array(n)).fill(null));
    
    build_frame.forEach(([x,y,a,b])=>{
        //a : 1 보 , 0 : 기둥
        if(b === 1){
            if(a === 0) {
                if(checkGidung(x,y)){
                    mat[x,y] = 0;
                }
            }else{
                  if(checkBo(x,y)){
                    mat[x,y] = 1;
                }
            }
        }else{
            
        }
        
    });
    
    
    /*
    
    build_frame의 원소는 [x, y, a, b]형태입니다.
    x, y는 기둥, 보를 설치 또는 삭제할 교차점의 좌표이며, [가로 좌표, 세로 좌표] 형태입니다.
    a는 설치 또는 삭제할 구조물의 종류를 나타내며, 0은 기둥, 1은 보를 나타냅니다.
    b는 구조물을 설치할 지, 혹은 삭제할 지를 나타내며 0은 삭제, 1은 설치를 나타냅니다.
    */
    return answer;
}

function checkBo(x,y){
    if(mat[x][y-1] === 0 || mat[x+1][y-1] === 0 || mat[x-1][y] === 1 || mat[x+1][y] === 1){
        return true;
    }
    return false;
}

function checkGidung(x,y){
    if(y === 0 || mat[x-1][y] === 1 || mat[x][y-1] === 0){
        return true;
    }
    return false;
}