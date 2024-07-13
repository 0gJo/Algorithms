function solution(id_list, k) {
    var answer = 0;
    //조건에 맞도록 정확하게 구현하는 문제..
    
    //고객들에게 지급된 쿠폰은 모두 몇 장인지 return 
    
    //고객이 쿠폰을 받을수 있을 수 있는 조건
    // 1. 오늘 첫구매인가 ? 
    // 2. 지금까지 모은 쿠폰이 k개를 넘지 않았는가?
    
    //지금까지 모은 쿠폰 수을 저장하는 map
    const cbook = new Map();
    
    id_list.forEach((day_str)=>{
        const id_list_day = day_str.split(' ');
        console.log(id_list_day);
        const set_list = new Set(id_list_day);
        console.log(set_list);
        for(let id of set_list){
            console.log(id);
            if(!cbook.has(id)){
                cbook.set(id, 1);
            }else{
                if(cbook.get(id)<k) cbook.set(id, cbook.get(id)+1);
            }
        }
        
    })
    
    let count = 0;
    console.log(cbook);
    
    for(let [key,value] of cbook){
        console.log(value);
        count += value;
    }
    
    
    
    return count;
}


console.log(solution(["A B C D", "A D", "A B D", "B D"], 2));