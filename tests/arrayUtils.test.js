import { chunk } from "../src/arrayUtils";
import { flatten } from "../src/arrayUtils";
import { uniq } from "../src/arrayUtils";


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