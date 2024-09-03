

function binary_search(start,end,array,target){
    let result = 0 ;
    while(start<=end){ //* start = end 일때는 mid = start = end 이다 
        //절단기 높이 
        let mid = parseInt((start+end)/2);
        let total = 0;
        array.forEach(tteok => {
            if(tteok > mid){
                total += (tteok - mid);
            }
        });
        //떡 총 길이가 최소값에 못미칠때 
        if(total < target){
            //mid의 왼쪽 탐색
            end = mid - 1; // * start > end
        }else{// 최소값 이상일때 
            result = mid;
            start = mid + 1; // * start > end 라서 다음 조건문이 못돈다. 
        }

    }
    return result;
}