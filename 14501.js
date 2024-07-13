

const main = function(N, t, p){
    console.log(t);
    console.log(p);
    let max = 0;
    const go = function (i, sum) {


        if (i>=N || i + t[i] > N) {
            //max비교후 갱신
            max = (sum >= max ? sum : max);
            return;
        }
    
        // 한다
        go(i + t[i], sum + p[i]);
    
        // 안한다
        go(i + 1, sum);
    
    }

    go(0,0);
    console.log(max);
}


const t = [3,5,1,1,2,4,2], p = [10,20,10,20,15,40,200], N = 7;

//const t = Array.from({length : 10}, (v,i) => 1) , p = Array.from({length : 10}, (v,i) => i+1), N = 10;
//45

//const N = 10, t = Array.from({length : N}, (v,i) =>5) , p = [10,9,8,7,6,10,9,8,7,6];
//10

//const N = 10, t = [5,4,3,2,1,1,2,3,4,5], p = [50,40,30,20,10,20,30,40,50];
//100


main(N,t,p);