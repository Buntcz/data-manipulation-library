function  isObject(item) {
    return(item && typeof item === 'object' && !Array.isArray(item)) // function that checks if a given element is an object;
}
function merge(object, ...sources) { // takes an object and sources that will merge theit properities with an object note: it overrieds properties with same names.
  if(!sources.length) return object;
  const source = sources.shift();

  if(isObject(object) && isObject(source)){
    for(const key in source) {
        if(isObject(source[key])) {
            if(!object[key]) Object.assign(object, { [key]: {} });
            merge(object[key],source[key])
        } else {
            Object.assign(object, { [key] : source[key] });
        }
    }
  }
  return merge(object, ...sources)
}

function omit(object, ...keys) {
   keys.forEach(key => {
    delete object[key]
   })
   return object
}

function pick(object, ...keys) {
    return keys.reduce((result, key) => {
        result[key] = object[key]
        return result;
    }, {}) 
}

export {merge, omit, pick}