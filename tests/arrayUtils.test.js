import { chunk } from "../src/arrayUtils";
import { flatten } from "../src/arrayUtils";
import { uniq } from "../src/arrayUtils";
import { zip } from "../src/arrayUtils";


it("expect chunk to split array into set parts", () =>{
    expect(chunk([2,1,3,4], 2)).toStrictEqual(
        ([[2,1],[3,4]]) 
    )
})

it('expect an array to be split into 3 parts', () => {
    expect(chunk([1,2,3,4,5,6,7,8,9], 3)).toStrictEqual(
        ([[1,2,3],[4,5,6],[7,8,9]])
    )
})

it('expect a odd length array to split in two', () => {
    expect(chunk([1,2,3,4,5,6,7], 2)).toStrictEqual(
        ([[1,2],[3,4],[5,6],[7]])
    )
})

it('expect to flatten a nested array', () => {
    expect(flatten([1,2,[1,2,9],[3,4],[5,6]])).toStrictEqual(
        ([1,2,1,2,9,3,4,5,6])
    )
})

it('expect to remove the duplicates from the array', () => {
    expect(uniq(['apple','lemon','banana','cherry','banana','apple','watermelon','cherry'])).toStrictEqual(
        (['apple','lemon','banana','cherry','watermelon'])
    )
})

it("expect to remove duplicates from the array #2", () => {
    expect(uniq(['nice','good','nice','work','good','do'])).toStrictEqual(
        (['nice','good','work','do'])
    )
})

it("expect to zip arrays values with the same indexes", () => {
    expect(zip([1,2,3], ['a','b','c'])).toStrictEqual(
        ([[1,"a"], [2,'b'],[3,'c']])
    )
})

it("expect to zip 3 arrays with value with the same indexes", () => {
    expect(zip([1,2,3],['a','b','c'],[true,false,true])).toStrictEqual(
        ([[1,"a",true], [2,'b',false],[3,'c',true]])
    )
})

it("expect to zip 2 arrays that have diff lengths, they last element should have undefined index", () => {
    expect(zip([1,2,3],[true,true,false,true])).toStrictEqual(
        ([[1,true],[2,true],[3,false],[undefined,true]])
    )
})