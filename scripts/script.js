const someArr = [1, 2, [1, 2, 3, [3, 2, 1]], [1, 1, 1]];

function flat (array, newArray = []) {
    
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    };
    
    function inner (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) newArray.push(arr[i]);
            else inner(arr[i]);
        }
        return newArray;  
    }
    return inner(array);
};

const newArray = flat(someArr);

console.log(newArray); // [1, 2, 1, 2, 3, 3, 2, 1, 1, 1, 1]

let a = [110]
const b = flat(someArr, a); // выдаёт ошибку



