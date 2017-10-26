import { removeFromArray } from "./functions"

describe("functions.test.js removeFromArray", () => {
    it("should remove item from array", () => {
        const arr = [1, 2, 3, 4]
        const expected = [1, 2, 4]
        const actual = removeFromArray(arr, 3)
        expect(actual).toEqual(expected)
    })

    it("should work with empty array", () => {
        const actual = removeFromArray([], 1)
        expect(actual).toEqual([])
    })

    it("should not remove anything if needle does not exist", () => {
        const arr = [1, 2, 3, 4]
        const actual = removeFromArray(arr, "Karel")
        const expected = [1, 2, 3, 4]
        expect(actual).toEqual(expected)
    })

    it("should not modify the parameter passed (immutable)", () => {
        const arr = [1, 2]
        const actual = removeFromArray(arr, 1)
        expect(arr).toEqual([1, 2]) // the original array is not modified
    })

    it("should throw Errors when passed non-Array", () => {
        expect(() => removeFromArray(undefined, null))
        .toThrow()
    })
})
