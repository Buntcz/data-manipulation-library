import { merge,omit,pick } from "../src/ObjectUtils";


it('expect the merge of an object and its sources', () => {
    const object = {a: 1, b : {c: 2}}
    const source1 = {b: {d: 3}}
    const source2 = {e: 4, b: {c: 5}}
    expect(merge(object, source1,source2)).toEqual(
        ({a: 1, b: {c: 5, d:3}, e:4})
    )
})

it('expect the merge of an object and its sources,', () => {
    const object = {a:2 , b: {c: 2}, c: 2}
    const source1 = {a:1, b: {c: 5, d:4}, e:4}
    const source2 = {b: {f:3}, x:3}
    expect(merge(object,source1,source2)).toEqual(
        ({a:1, b:{c:5,d:4,f:3},c:2,e:4,x:3})
    )
})

it("expect the function to exclude the called keys", () => {
    const object = {a:2,b:4,c:5}
    const key1 = "a"
    expect(omit(object,key1)).toEqual(
        {b:4,c:5}
    )
})

it("removes more than one listed keys", () => {
    const object = {a:2, b:3,c:4,d:5,f:6}
    const key1 = 'b'
    const key2 = 'd'
    const key3 = 'f'
    expect(omit(object,key1,key2,key3)).toEqual(
        {a:2,c:4}
    )
})

it("picks a key from an object", () => {
    const object = {a:2, b:3, c:4, d:5, f:6}
    const key1 = "a"
    expect(pick(object,key1)).toEqual(
        {a:2}
    )
})

it("picks multiple keys from an object", () => {
    const object = {a:2, b:3, c:4, d:5, f:6};
    const key1 = 'a'
    const key2 = 'c'
    const key3 = 'f'
    expect(pick(object,key1,key2,key3)).toEqual(
        {a:2,c:4,f:6}
    )
})