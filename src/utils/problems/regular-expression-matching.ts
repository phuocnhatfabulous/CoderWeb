import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeRegularExpressionMatching= `/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/

function isMatch(s, p){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerRegularExpressionMatching = (fn: any) => {
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
        console.log('Regular Expression Matching handler function error');
        throw new Error(error);
    }
};

export const RegularExpressionMatching: Problem = {
    id: 'Regular Expression Matching',
    title: 'Regular Expression Matching',
    problemStatement: `<p class='mt-3'>
    Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:
</p>
    <li class='mt-3'><code>'.'</code> Matches any single character.</li>
    <li class='mt-3'><code>'*'</code> Matches any single character.</li>
    <p class='mt-3'>
    The matching should cover the entire input string (not partial).
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 's = "aa", p = "a"',
            outputText: 'false',
            explanation: '"a" does not match the entire string "aa".',
        },
        {
            id: 2,
            inputText: 's = "aa", p = "a*"',
            outputText: 'true',
            explanation: '"*" means zero or more of the preceding element, "a". Therefore, by repeating "a" once, it becomes "aa".',
         
        },
        {
            id: 3,
            inputText: 's = "ab", p = ".*"',
            outputText: 'true',
            explanation: '".*" means "zero or more (*) of any character (.)".',
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>1 <= s.length <= 20</code>
</li> <li class='mt-2'>
<code>1 <= p.length <= 20</code>
</li> <li class='mt-2'>
<code>s</code> contains only lowercase English letters.
</li> <li class='mt-2'>
<code>p</code> contains only lowercase English letters, '.', and '*'.
</li>  <li class='mt-2'>
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
</li>
`,
    handlerFunction: handlerRegularExpressionMatching,
    starterCode: starterCodeRegularExpressionMatching,
    order: 10,
    starterFunctionName: 'function isMatch(',
};
