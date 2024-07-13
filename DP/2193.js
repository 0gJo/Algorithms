//이친수



/** 
 * 3
 * 000
 * 001
 * 010
 * 011
 * [100]
 * [101]
 * 110
 * 111
 */

 

 




 const main = function (n) {
    let count = 0;
    const f = function(prev, numStr){
        if(numStr.length === n){ //n is undefined.
            count++;
            return;
        }
    
        if(prev === 1){
            f(0, numStr + 0);
        }
        if(prev === 0){
            f(1, numStr + 1);
            f(0, numStr + 0);
        }
     }

     f(1,'1');
     console.log(count);
 }


 console.log(main(3));