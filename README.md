Data manipulation library made by Buntcz, inspired by lodash,

Array Utilities
Mehtods to manipulate arrays.
1. chunk(array, parts), array => pass in the array you want to use, parts => pass in the parts you want your array be sliced in
example: if you have array with legnth of 8, and you pass parts = 2, it will return 4 arrays with length 2.
2. flatten(nestedArray) after you pass a nested array it returns a normal array, however this works only for 2D arays for now. 3D array coming.
3. uni1(array) , it works like Set, but it returns an actual array, after you pass in an array it removes all duplicates.
4. zip(...arrays) after you pass in all arrays you need it zips the array elements with the same indexes
example : if you pass in these 2 arrays [a,b,c] and [1,2,3] it will return [1,a],[2,b],[3,c]

Objects Utililites
Methods to manipulate objects

1. merge(object,...sources), after you pass in an object and in sources you can pass as much keys as you want, it will merge the object with the keys and return a brand new object.
2. omit(object, ...keys), after you pass in an object and the keys, it will remove all the keys that you called in the object, returning and object without the called keys.
3. pick(object, ...keys), just returns the keys you called from the object, if they are present in the object, if not returns 

String Utilies
Methods to manipulate strings

1. camelCase(string), returns the string in Camel Case ex: Cheese Burger => cheeseBurger
2. kebabCase(string), returns the string in Kebab Case ex: Cheese Burget => cheese-burger
3. capitalize(string), return the string with its first letter capitalized ex: cheese Burger => Cheese Burger

Function Utilites
2 Methods of delayed call of a function

1. debounce(func,wait) , in func pass in the function in the wait the delay you want your function to start.
!!! In debounce the function is called only once after the delay has passed, example: if you pass a function that prints hello world, and a 2 second delay,
it will console log hello world only once after 2 seconds

2. throttle(func,wait), debounce(func,wait) , in func pass in the function in the wait pass the delay you want your Intervals to pass to start the function,
!!! In throttle the function starts every time the delay passes, example: if you pass a function that prints hello world, and a 2 second delay,
it will console log hello every 2 seconds.

General Utilities
Methods to clone and compare objects.
1. cloneDeep(value), deepClones the object passed.
2. isEqual(value,otherValue), compares the 2 objects given, each key of the 1st valus is compared with each key of the 2nd value.

That was for my first ever library, I know it's not the best but for a first time I think it's great.
Thanks for checking it out.
