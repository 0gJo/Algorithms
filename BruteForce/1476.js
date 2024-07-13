











const main = function(i_e,i_s,i_m) {


    //const eArr = new Array(15); eArr.map((e,i) => i+1);
    const eArr = Array.from(new Array(15), (x,i) => i + 1);
    const sArr = Array.from(new Array(28), (x,i) => i + 1);
    const mArr = Array.from(new Array(19), (x,i) => i + 1);

    let year = 0, i = 0, j = 0 , k = 0;

    
    while (true) {

        i = (i == eArr.length ? 0 : i);
        j = (j == sArr.length ? 0 : j);
        k = (k == mArr.length ? 0 : k);


        let e = eArr[i], s = sArr[j], m = mArr[k];
        year ++;

        if(e == i_e && s == i_s && m == i_m){
            console.log(year);
            break;
        }

        i++;
        j++;
        k++;

    }



}


main(15,28,19);
