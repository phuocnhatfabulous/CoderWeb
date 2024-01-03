import assert from 'assert';
import { Problem } from '../types/problem';
import example1 from "./images/add-two-numbers.jpeg";

const starterCodeAddTwoNumber = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

function addTwoNumbers(l1, l2){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerAddTwoNumber = (fn: any) => {
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
        console.log('twoSum handler function error');
        throw new Error(error);
    }
};

export const addTwoNumbers: Problem = {
    id: 'Add Two Numbers',
    title: 'Add Two Numbers',
    problemStatement: `<p class='mt-3'>
    You are given two <code>non-empty</code> linked lists representing two non-negative integers. The digits are stored in <code>reverse order</code>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
</p>
<p class='mt-3'>
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 'l1 = [2, 4, 3], l2 = [5, 6, 4]',
            outputText: '[7, 0, 8]',
            explanation: '342 + 465 = 807.',
            img: example1.src,
        },
        {
            id: 2,
            inputText: 'l1 = [0], l2 = [0]',
            outputText: '[0]',
        },
        {
            id: 3,
            inputText: 'l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]',
            outputText: '[8, 9, 9, 9, 0, 0, 0, 1]',
        },
    ],
    constraints: `<li class='mt-2'>
  <code>2 [1, 100]</code>
</li> <li class='mt-2'>
<code>0 <= Node.val <= 9</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<p>It is guaranteed that the list represents a number that does not have leading zeros.</p>
</li>`,
    handlerFunction: handlerAddTwoNumber,
    starterCode: starterCodeAddTwoNumber,
    order: 2,
    starterFunctionName: 'function addTwoNumbers(',
};
