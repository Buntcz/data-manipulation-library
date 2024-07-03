import { debounce,throttle } from "../src/functionUtils";
import { jest } from '@jest/globals'

jest.useFakeTimers("modern");

describe("debounce", () => {
    let func
    let debouncedFunc

    beforeEach(() => {
        func = jest.fn();
        debouncedFunc = debounce(func,1000)
    })

    it("execute just once", () => {
        for(let i = 0; i <= 100; i++) {
            debouncedFunc();
        }

        jest.runAllTimers();
        expect(func).toBeCalledTimes(1);
    })
})

describe("throttle", () => {
    let func;
    let throttleFunc;

    beforeEach(() => {
        func = jest.fn()
        throttleFunc = throttle(func,500);
    })
    it('executes 10 times', () => {
        for(let i = 0; i <= 10; i++) {
            throttleFunc();
        }
        jest.runAllTimers();
        expect(func).toBeCalledTimes(10)
    })
})