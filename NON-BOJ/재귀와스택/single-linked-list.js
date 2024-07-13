//재귀적 구조인 연결 리스트...
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


// * 이전 요소를 참조하는 프로퍼티 prev를 추가해 이전 요소로 쉽게 이동하게 할 수 있습니다.
// => prev도 그렇게 되면 끝도 없이 재귀형태가 되는데? next 대신 사용한다면 가능.
// * 리스트의 마지막 요소를 참조하는 변수 tail를 추가할 수 있습니다. 다만 이때 주의할 점은 리스트 마지막에 요소를 추가하거나 삭제할 때 tail도 갱신해 줘야 합니다.
// * 이 외에도 요구사항에 따라 구조를 변경할 수 있습니다.


// 1 -> 2 -> 3 -> 4 

// 2번째에 5를 삽입하라.


list.next = {
    value : 5, // 변경사항 1. 1 -> 5 참조 관계 변경
    next : list.next, // 변경사항 2. 5 -> 2 참조 관계 추가 
}

console.log(list);


// 1 -> 5 -> 2 -> 3 -> 4 

// 4번째 요소(3)를 제거하라.

// 변경사항 2 -> 4로 변경

list.next.next.next = list.next.next.next.next;


console.log(list);
