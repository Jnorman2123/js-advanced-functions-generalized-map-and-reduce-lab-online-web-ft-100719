// Add your functions here
function map (array, func) {
    const newArray = []
    for(const element of array) {
        newArray.push(func(element))
    }
    return newArray
}

function reduce(array, func, startingVal){
    let returnVal = startingVal ? startingVal : array[0]
    let i = startingVal ? 0 : 1
    for(; i < array.length; i++){
        returnVal = func(array[i], returnVal)
    }
    return returnVal
}
