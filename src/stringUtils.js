function camelCase(string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export {camelCase, kebabCase, capitalize}