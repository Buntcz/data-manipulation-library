import { camelCase, kebabCase,capitalize } from "../src/stringUtils";

it("expect the string to be converted into camel case", () => {
    expect(camelCase("Cheese Burger")).toBe(
        ("cheeseBurger")
    )
})

it('expect a long string to be converted into camel case', () => {
    let string = 'This is supposed to be camel case'
    expect(camelCase(string)).toBe(
        ("thisIsSupposedToBeCamelCase")
    )
})

it('expect a string to be convertec into kebab-case', () => {
    expect(kebabCase('Cheese Burger')).toBe(
        ('cheese-burger')
    )
})

it("expect a long string to be converted into kebab-case", () => {
    let string = "This is supposed to be kebab case"
    expect(kebabCase(string)).toBe(
        ("this-is-supposed-to-be-kebab-case")
    )
})

it("expect the first character of a string to be upperCase", () => {
    expect(capitalize("cheese")).toBe(
        ("Cheese")
    )
})