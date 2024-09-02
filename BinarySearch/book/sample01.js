function binary_search(array, target, start, end) {
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return false;
}

// x : list to be checked
// array : list to be searched
// x type : Array<Number>
function main(array, x) {
    let n = array.length;
    array.sort();
    x.forEach(e => {
        let result = binary_search(array, e, 0, n - 1);
        if (result === false) {
            console.log(`${e} is not found`);
        } else {
            console.log(`${e} is found`);
        }
    });
}