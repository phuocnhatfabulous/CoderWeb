import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeStringToInteger = `/**
* @param {string} s
* @return {number}
*/

function myAtoi(w){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerStringToInteger = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const l1 = [[2, 4, 3], [0], [9, 9, 9, 9, 9, 9, 9]];

        const l2 = [[5, 6, 4], [0], [9, 9, 9, 9]];
        const answers = [[7, 0, 8], [0], [8, 9, 9, 9, 0, 0, 0, 1]];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < l1.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(l1[i], l2[i]);
            assert.deepStrictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log('String to Integer handler function error');
        throw new Error(error);
    }
};

export const StringToInteger: Problem = {
    id: 'String To Integer (atoi)',
    title: 'String To Integer (atoi)',
    problemStatement: `<p class='mt-3'>
    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
    The algorithm for myAtoi(string s) is as follows:
    Read in and ignore any leading whitespace.
    Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
    Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
    Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
    Return the integer as the final result.
</p>
<p class='mt-3'>
    <strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong>
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 's = "42"',
            outputText: '42',
            explanation: '',
        },
        {
            id: 2,
            inputText: 'x = -123',
            outputText: '-321',
            explanation: '',
        },
        {
            id: 3,
            inputText: 'x = 120',
            outputText: '21',
            explanation: '',
        },
    ],
    constraints: `<li class='mt-2'>
  <code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code>
</li> 
`,
    handlerFunction: handlerStringToInteger,
    starterCode: starterCodeStringToInteger,
    order: 8,
    starterFunctionName: 'function myAtoi(',
};
