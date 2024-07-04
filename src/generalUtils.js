function cloneDeep(value) { // deep cloning a value
    let newValue = {...value}
    return newValue;
}

function isEqual(value,otherValue) { // deep comparing two values
   const objKeys1 = Object.keys(value)
   const objKeys2 = Object.keys(otherValue)

   if(objKeys1.length !== objKeys2.length) return false;

   for(let key of objKeys1) {
    const value1 = value[key]
    const value2 =otherValue[key]

    const isObjects = isObject(value1) && isObject(value2);

    if(isObjects && !isEqual(value1,value2) || (!isObjects && value1 !== value2)) {
        return false
    } 
   }
  return true;
}


function  isObject(item) {
    return(item && typeof item === 'object' && !Array.isArray(item)) // function that checks if a given element is an object;
}

export {cloneDeep, isEqual}