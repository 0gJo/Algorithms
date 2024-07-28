function solution(s) {
    //앞에 있던 단어와 같으면
    //cnt ++
    //다음 단어로 넘어가기
    
    //앞에 있던 단어와 같지 않으면
    //누적 문자열 + cnt + 앞에 있던 단어 하고 cnt=1 초기화 앞에 있던 단어 = 현재단어 
    //단, cnt === 1이면, 누적 문자열 + 앞에 있던 단어 
    
    const cutSize = parseInt(s.length/2);
    let min = Number.MAX_SAFE_INTEGER; 
    for(let i=1; i<=cutSize; i++){
        const compStr = compress(i,s);
        if(compStr.length <= min){
            min = compStr.length;
        }
    }
    return min;
}
// function compress(length, str){
//     let result = '';
//     let prev = '';
//     let cnt = 1;
    
//     for(let i=0; true; i+=length){
//         let cur = i>=str.length? '' : str.slice(i, i+length);
        
//         if(cur === prev){
//             cnt++;
//             continue;
//         }
//         if(cnt === 1){
//             result = result + prev;
//         }else{
//             result = result + cnt + prev;
//         }
        
//         prev = cur;
//         cnt = 1;

//         if(i>=str.length) break;
        
//     }
//     return result;
// }

function compress(length, str){
    let result = '';
    let prev = '';
    let cnt = 1;
    
    for(let i=0; i<str.length; i+=length){
        let cur = str.slice(i, i+length);
        
        if(cur === prev){
            cnt++;
            continue;
        }
        if(cnt === 1){
            result = result + prev;
        }else{
            result = result + cnt + prev;
        }
        
        prev = cur;
        cnt = 1;
        
    }

    if(cnt === 1){
        result = result + prev;
    }else{
        result = result + cnt + prev;
    }

    return result;
}


console.log(solution("xababcdcdababcdcd"));
