import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeRevertInteger = `/**
* @param {number} x
* @return {number}
*/

function reverse(x){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerRevertInteger = (fn: any) => {
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
        console.log('Reverse Integer handler function error');
        throw new Error(error);
    }
};

export const RevertInteger: Problem = {
    id: 'Reverse Integer',
    title: 'Reverse Integer',
    problemStatement: `<p class='mt-3'>
    Given a signed 32-bit integer <code>x</code>, return <code>x</code> <i>with its digits reversed</i>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then return <code>0</code>.
</p>
<p class='mt-3'>
    <strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong>
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 'x = 123',
            outputText: '321',
            explanation: "",
        },
        {
            id: 2,
            inputText: 'x = -123',
            outputText: '-321',
            explanation: "",
         
        },
        {
            id: 3,
            inputText: 'x = 120',
            outputText: '21',
            explanation: "",
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code>
</li> 
`,
    handlerFunction: handlerRevertInteger,
    starterCode: starterCodeRevertInteger,
    order: 6,
    starterFunctionName: 'function reverse(',
};
