





const printList_1 = function(node){
   
    if(node.next !== null){
      printList_1(node.next);
    }
    console.log(node.value);
}

//list.value
//list.next.value 
//list.next.next.value
//list.next.next.next.value



const printList_2 = function(list){
  let target = list;
  let arr = [];

  while (target !== null) {
    arr.push(target.value);
    target = target.next;
  }

  while (arr.length !== 0) {
    console.log(arr.pop());
  }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


printList_1(list);
printList_2(list);

//그리고 재귀를 사용한 것과 재귀를 사용하지 않은 것 중 어떤 게 더 좋은 코드인지 생각해봅시다.

//=> 재귀. 몇 depth인지 셀필요 없다. depth가 깊어지면 depth파악에 어려움이 있을듯.
//=> 이건 while 문으로 해결할 수 있음.
