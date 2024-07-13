

//인접리스트 m

const sArr = [1,2,3,4,5,6,7];
const deps = 6;

const makeMat = function(array){
  const m = [];
  for (let i = 0; i < array.length; i++) {
    const linked = [];
    for (let j = i+1; j < array.length; j++) {
      linked.push(j);
    }
    m.push(linked);
  }
  return m;
}


const m = makeMat(sArr);
const rootLinkedArr = sArr.map((v,i)=>i);

const go = function(idx,choice){
  if(choice.length === deps){
    console.log(choice);
    return;
  }
  const linkedArr = (idx === -1? rootLinkedArr : m[idx]);
  for (let i = 0; i < linkedArr.length; i++) {
    const nextIdx = linkedArr[i];
    choice.push(sArr[nextIdx]);
    go(nextIdx,choice);
    choice.pop();
  }
}

go(-1,[]);



// 1 2 3 
// 1 2 4
// 1 3 4
// 2 3 4 