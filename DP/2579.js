

const main = function(arr){
    const d = new Array(arr.length);


    for (let i = 0; i < d.length; i++) {
        const arg1 = (d[i-3]? d[i-3] : 0);
        const arg2 = (arr[i-1]? arr[i-1] : 0);
        const prevOne = arg1 + arg2;
        const prevTwo = (d[i-2]? d[i-2] : 0);
        
        d[i] = Math.max(prevOne,prevTwo) + arr[i];
    }

    console.log(d[d.length-1]);

}

main([10,20,15,25,10,20]);