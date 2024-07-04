import { cloneDeep,isEqual } from "../src/generalUtils";

it('it should deep clone an object in js', () => {
    let Object = {
        name: 'Roger',
        age: 14,
        class: '8th A'
    }
    expect(cloneDeep(Object)).toEqual(
        {         name: 'Roger',
            age: 14,
            class: '8th A'
        }
    )
})


it("it should return true comparing the two objects", () => {
    const person1 = {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35 
    }
    
    const person2 = {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35 
    }
    expect(isEqual(person1,person2)).toBeTruthy()
})

it("it should return true even if values have changed places", () => {
    const person1 = {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35 
    }
    
    const person2 = {
        "age": 35 ,
        "firstName": "John",
        "lastName": "Doe"
    }
   expect(isEqual(person1,person2)).toBeTruthy();
})