function solution(arr) {

    arr.sort((a, b) => (
        a[1] - b[1]
    ));

    return arr;
}

console.log([['홍길동', 95], ['이순신', 77]]);