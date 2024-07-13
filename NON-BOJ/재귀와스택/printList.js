





const printList_1 = function(node){
    console.log(node.value);
    if(node.next !== null){
        printList_1(node.next);
    }
}

//list.value
//list.next.value 
//list.next.next.value
//list.next.next.next.value

//내풀이 1
// const printList_2 = function(list){

//     let target = list;
//     for (let i = 0; i < 4; i++) {
//         console.log(target.value);
//         target = target.next;        
//     }

// }

// 내풀이 2
// const printList_2 = function(list){
//   let target = list;

//    while (true) {
//       console.log(target.value);
//       if(target.next !== null){
//         target = target.next;
//       }else{
//         break;
//       }
//    }

// }

// 조건문의 기준을 다음 노드(호출) .next로 잡지말고 항상 현재 노드(호출)를 기준으로 잡으면 편하다.
// 현재 노드는 null이 될 수 있다.
const printList_2 = function(list){
    let target = list;
  
    while (target !== null) { //재귀의 recursive step과 동일
      console.log(target.value);
      target = target.next;
    }
    
    //재귀의 base와 동일
  
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
