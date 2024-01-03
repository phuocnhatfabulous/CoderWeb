import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeLongestSubstring = `/**
* @param {string} s
* @return {number}
*/
function lengthOfLongestSubstring (s) {
    // Write your code here
};
`;

// checks if the user has the correct code
const handlerLongestSubstring = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const s = ['abcabcbb', 'bbbbb', 'pwwkew'];

        const answers = [3, 1, 3];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < l1.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(l1[i], l2[i]);
            assert.deepStrictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log('twoSum handler function error');
        throw new Error(error);
    }
};

export const longestSubstring: Problem = {
    id: 'Longest Substring Without Repeating Characters',
    title: 'Longest Substring Without Repeating Characters',
    problemStatement: `<p class='mt-3'>
    Given a string <code>s</code>, find the length of the <strong>longest</strong> 
<strong class='text-teal-300'>substring</strong> without repeating characters. 
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 's = "abcabcbb"',
            outputText: '3',
            explanation: 'The answer is "abc", with the length of 3.',
        },
        {
            id: 2,
            inputText: 's = "bbbbb"',
            outputText: '1',
            explanation: 'The answer is "b", with the length of 1.',
        },
        {
            id: 3,
            inputText: 's = "pwwkew"',
            outputText: '3',
            explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.'
        },
    ],
    constraints: `<li class='mt-2'>
<code> 0 ≤ target ≤ 10<sup>4</sup></code>
</li>
<li class='mt-2 text-sm'>
<code>s</code> consists of English letters, digits, symbols and spaces.
</li>`,
    handlerFunction: handlerLongestSubstring,
    starterCode: starterCodeLongestSubstring,
    order: 3,
    starterFunctionName: 'function lengthOfLongestSubstring(',
};
