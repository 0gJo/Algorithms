function solution(clothes) {
    var answer = 0;
    
    //clothes[idx]를 뽑을것인지 안뽑을것인지 선택
    const go = function(idx, count, targetCount, map){
        
        if(count === targetCount){
            answer++;
            return;
        }
        
        //놓친 부분... 
        if(!clothes[idx]) return;
        
        const category = clothes[idx][1];
        
        if(!map.get(category)){ //아직 해당 종류의 옷이 안뽑혔으면
            //checked에 표시
            map.set(category, true);
            //뽑는다
            go(idx+1, count+1, targetCount,map);

            map.set(category, false);
         
        }
            //안뽑고 다음으로 넘어간다.
            go(idx+1, count, targetCount,map);
        
        
        
    }
    
    const set = new Set(clothes.map(([name,category])=>category));
    
    for(let i = 0; i < set.size; i++){
        go(0,0,i+1, new Map());
        console.log(answer);
    }    
    
    return answer;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], 
["green_turban", "headgear"],["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes));