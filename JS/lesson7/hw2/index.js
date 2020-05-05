export const reverseArray = numbers => {

    if(!Array.isArray(numbers)){
        return null;
    }
    const arrNew = numbers.concat();
    const arrReversNum = arrNew.reverse();
    return arrReversNum;
}

// const arr = [2, 5, 6];
// console.log(reverseArray(arr))
