import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodePalindromeNumber = `/**
* @param {number} x
* @return {boolean}
*/

function isPalindrome(x){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerPalindromeNumber = (fn: any) => {
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
        console.log('Palindrome Number handler function error');
        throw new Error(error);
    }
};

export const PalindromeNumber: Problem = {
    id: 'Palindrome Number',
    title: 'Palindrome Number',
    problemStatement: `<p class='mt-3'>
    Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a <b class='text-teal-300'>palindrome</b>, and <code>false</code> <i>otherwise</i>.
</p>

`,
    examples: [
        {
            id: 1,
            inputText: 'x = 121',
            outputText: 'true',
            explanation: "121 reads as 121 from left to right and from right to left.",
        },
        {
            id: 2,
            inputText: 'x = -121',
            outputText: 'false',
            explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
         
        },
        {
            id: 3,
            inputText: 'x = 10',
            outputText: 'false',
            explanation: "Reads 01 from right to left. Therefore it is not a palindrome.",
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code>
</li> 
`,
    handlerFunction: handlerPalindromeNumber,
    starterCode: starterCodePalindromeNumber,
    order: 9,
    starterFunctionName: 'function isPalindrome(',
};
