function solution(ops = [1, 0, 1, 0], nums = [3, 4, 5]) {

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    const dfs = function (sum, nextIdx) {

        if(nextIdx === nums.length){
            min = Math.min(min, sum);
            max = Math.max(max, sum);
            return;
        }

        const next = nums[nextIdx];

        if (ops[0] > 0) {
            ops[0] -= 1;
            dfs(sum + next, nextIdx + 1);
            ops[0] += 1;
        }

        if (ops[1] > 0) {
            ops[1] -= 1;
            dfs(sum - next, nextIdx + 1);
            ops[1] += 1;
        }

        if (ops[2] > 0) {
            ops[2] -= 1;
            dfs(sum * next, nextIdx + 1);
            ops[2] += 1;
        }

        if (ops[3] > 0) {
            ops[3] -= 1;
            let divSum = Number.parseInt(sum/next); //(sum > 0 ? sum / next : (-1) * sum / next * (-1));
            dfs(divSum, nextIdx + 1);
            ops[3] += 1;
        }


    }

    dfs(nums[0],1);
    
    console.log(`min : ${min} , max : ${max}`);


}

solution([2,1,1,1],[1,2,3,4,5,6]);