import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeLongestSubstring = `/**
* @param {string} s
* @return {string}
*/

function longestPalindrome(s){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerLongestSubstring = (fn: any) => {
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
        console.log('Longest Palindromic Substring handler function error');
        throw new Error(error);
    }
};

export const LongestSubstring: Problem = {
    id: 'Longest Palindromic Substring',
    title: 'Longest Palindromic Substring',
    problemStatement: `<p class='mt-3'>
    Given a string <code>s</code>, return the longest <i class='text-teal-300'>palindromic substring</i> in <code>s</code>.
</p>

`,
    examples: [
        {
            id: 1,
            inputText: 's = "babad"',
            outputText: '"bab"',
            explanation: '"aba" is also a valid answer.',
        },
        {
            id: 2,
            inputText: 's = "cbbd"',
            outputText: '"bb"',
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>1 <= s.length <= 1000</code>
</li> <li class='mt-2'>
<code>s</code> consist of only digits and English letters.
</li>
`,
    handlerFunction: handlerLongestSubstring,
    starterCode: starterCodeLongestSubstring,
    order: 5,
    starterFunctionName: 'function longestPalindrome(',
};
