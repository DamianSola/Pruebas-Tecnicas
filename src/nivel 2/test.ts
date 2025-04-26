import { isUnique, rotate, compress } from "./index";

xdescribe('isUnique', () => {
    it('should return false because the string is not unique ', () => {
        expect(isUnique('monasterio')).toBe(false)
    });
    it('should return true for the string is unique', () => {
        expect(isUnique('campesino')).toBe(true)
    });
})

describe('compress', () => {
    it('should return "2j1r4l2e3w".', () => {
        expect(compress('jjrlllleewww')).toBe("2j1r4l2e3w")
    });
    it('should return "3sp4h1t22m1n".', () => {
        expect(compress('ssspphhhhtmmn')).toBe("3sp4h1t22m1n")
    })
})

describe('rotate',()=>{
    it('should return [ [ 4, 9, 7 ], [ 2, 5, 3 ], [ 3, 4, 8 ] ]',() => {
        expect(rotate({
            datos: [
              [4, 2, 3],
              [9, 5, 4],
              [7, 3, 8]
            ]
          })).toStrictEqual([[4, 9, 7],[2, 5, 3],[3, 4, 8]]) // [ [ 4, 9, 7 ], [ 2, 5, 3 ], [ 3, 4, 8 ] ]
    });
    it(' should return [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]',() => {
        expect(rotate({
            datos: [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
            ]
          })).toStrictEqual([[1, 4, 7],[2, 5, 8],[3, 6, 9]]) //[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
    })
})