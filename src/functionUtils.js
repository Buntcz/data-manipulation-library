function debounce(func,wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout =  setTimeout(func,wait)
    }
}

function throttle(func,wait) {
    let timer =  null;
    return(...args) => {
        func(...args);
        timer = setTimeout(() => {
            timer = null;
        }, wait)
   } 
}

export {debounce,throttle}

