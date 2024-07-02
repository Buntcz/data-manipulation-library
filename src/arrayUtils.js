//4 array manipulation methods
function chunk(array, parts) { // function that chunks array into set parts of a nested array.
   let result = []
   for(let i = 0; i < array.length; i += parts) {
    result.push(array.slice(i, i + parts))
   }
   return result;
} // done works perfectly

function flatten(nestedArray) { // given a nested array returns a normal array with all the values
    let newArray = []
    for(let  i = 0; i < nestedArray.length; i++) {
        if(nestedArray[i].length > 0) {
            let j = 0
            while(j < nestedArray[i].length) {
                newArray.push(nestedArray[i][j])
                j++
            }
        } else {
            newArray.push(nestedArray[i])
        }
    }
     return newArray
} // works ok for now but It's only for two Dimentional arrays, will work out a version for multi size too.

function uniq(array) { // removes duplicates from an array.
    let newArray = [];
    array.forEach(element => {
        if(!newArray.includes(element)) {
            newArray.push(element)
        }
    })
    return newArray;
}

function zip(...arrays) {
return Array.from({length: Math.max(...arrays.map(a => a.length))}, (_, i) => arrays.map(a => a[i]) )
}

export { chunk, flatten, uniq, zip }