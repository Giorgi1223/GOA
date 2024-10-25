
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


function myMap(array, callback) {
    const result = [];
    myForEach(array, (element, index) => {
        result[index] = callback(element, index, array);
    });
    return result;
}


function myFilter(array, callback) {
    const result = [];
    myForEach(array, (element, index) => {
        if (callback(element, index, array)) {
            result.push(element);
        }
    });
    return result;
}


function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
