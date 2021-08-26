import {getName} from "./index.js";

it("Should return the string 'Sam, 22 years old.'", () => {
    const output = getName('Sam', 22);
    expect(output).toBe('Sam, 22 years old.');
})

it("Should return the name, followed by the age.'", () => {
    const output = getName('Dan', 26);
    expect(output).toBe('Dan, 26 years old.');
})