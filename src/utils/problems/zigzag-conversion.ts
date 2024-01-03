import assert from 'assert';
import { Problem } from '../types/problem';
import example1 from "./images/zigzag.png";

const starterCodeZigzagConversion = `/**
* @param {string} s
* @return {string}
*/

function convert(s, numRows){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerZigzagConversion = (fn: any) => {
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
        console.log('Zigzag Conversion handler function error');
        throw new Error(error);
    }
};

export const ZigzagConversion: Problem = {
    id: 'Zigzag Conversion',
    title: 'Zigzag Conversion',
    problemStatement: `<p class='mt-3'>
    The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
</p>
<p class='mt-3'>
    <pre>
    P   A   H   N
    A P L S I I G
    Y   I   R</pre>
</p>
<p class='mt-3'>
And then read line by line: <code>"PAHNAPLSIIGYIR"</code>
</p>
<p class='mt-3'>
Write the code that will take a string and make this conversion given a number of rows:
</p>
<p class='mt-3'>
<pre>string convert(string s, int numRows);
</pre>
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 's = "PAYPALISHIRING", numRows = 3',
            outputText: '"PAHNAPLSIIGYIR"',
        },
        {
            id: 2,
            inputText: 's = "PAYPALISHIRING", numRows = 4',
            outputText: '"PINALSIGYAHRPI"',
            explanation: "",
         
        },
        {
            id: 3,
            inputText: 's = "A", numRows = 1',
            outputText: '"A"',
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>1 <= s.length <= 1000</code>
</li> <li class='mt-2'>
<code>s</code> consists of English letters (lower-case and upper-case), <code>','</code> and <code>'.'</code>.
</li>
<li class='mt-2'>
  <code>1 <= numRows <= 1000</code>
</li>
`,
    handlerFunction: handlerZigzagConversion,
    starterCode: starterCodeZigzagConversion,
    order: 6,
    starterFunctionName: 'function convert(',
};
