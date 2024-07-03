function debounce(func,wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout =  setTimeout(func,wait)
    }
}

function throttle(func,wait) {
    let timer;
    return function() {
        clearInterval(timer)
        timer = setInterval(func,wait)
    }
}

export {debounce,throttle}

