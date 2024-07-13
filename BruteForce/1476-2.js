const main = function(i_e,i_s,i_m) {

    i_e --;
    i_s --;
    i_m --;

    console.log(i_e);

    let one_year_ago = 0; 
    
    while (true) {

        if(one_year_ago%15 == i_e && one_year_ago%28 == i_s && one_year_ago % 19 == i_m){
            console.log(one_year_ago + 1);
            break;
        }

        one_year_ago ++;

    }



}


main(15,28,19);
