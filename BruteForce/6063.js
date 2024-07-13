const main = function (k, sArr) {
    const choice = [];
    const checked = new Array(sArr.length);
    let count = 0;
  
    const go = function (sidx) {
      if (choice.length === k) {
        count++;
        console.log(choice);
        return;
      }
  
      for (let i = sidx; i < sArr.length; i++) {
        if (!checked[i]) {
          choice.push(sArr[i]);
          checked[i] = true;
          go(i+1);
          choice.pop();
          checked[i] = false;
        }
      }
    };
    go(0);
    console.log(count);
  };
  
  main(6, [1, 2, 3, 4, 5, 6, 7]);
  //main(2, [1, 2, 3]);
  