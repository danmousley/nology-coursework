import { Triangle } from './triangle.js';

describe('Tests to determine whether or not a shape entered is a triangle', () => {

    describe('equilateral triangle', () => {
        test('all sides are equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true)
        });

        test('all sides unequal', () => {
            const triangle = new Triangle(1, 2, 3);
            expect(triangle.isEquilateral).toBe(false)
        })
    })

    describe('isosceles triangle', () => {
        test('two sides are equal', () => {
            const triangle = new Triangle(4, 4, 2)
            expect(triangle.isIsosceles).toBe(true)
        })

        test('no sides are equal', () => {
            const triangle = new Triangle(5, 4, 2)
            expect(triangle.isIsosceles).toBe(false)
        })
    })

    describe('scalene triangle', () => {
        test('some sides are equal', () => {
            const triangle = new Triangle(4, 2, 2)
            expect(triangle.isScalene).toBe(false)
        })

        test('no sides are equal', () => {
            const triangle = new Triangle(5, 4, 2)
            expect(triangle.isScalene).toBe(true)
        })
    })
})