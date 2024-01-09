import assert from 'assert';
import { Problem } from '../types/problem';

const starterCodeAddMedianTwoArray = `/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/

function findMedianSortedArrays(nums1, nums2){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerAddMedianTwoArray = (fn: any) => {
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
        console.log('Median of Two Sorted Arrays handler function error');
        throw new Error(error);
    }
};

export const MedianTwoArrays: Problem = {
    id: 'Median of Two Sorted Arrays',
    title: 'Median of Two Sorted Arrays',
    problemStatement: `<p class='mt-3'>
    Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong class='text-teal-300'>the median</strong> of the two sorted arrays.
</p>
<p class='mt-3'>
The overall run time complexity should be <code>O(log (m+n))</code>.
</p>
`,
    examples: [
        {
            id: 1,
            inputText: 'nums1 = [1,3], nums2 = [2]',
            outputText: '2.00000',
            explanation: 'merged array = [1,2,3] and median is 2.',
        },
        {
            id: 2,
            inputText: 'nums1 = [1,2], nums2 = [3,4]',
            outputText: '2.50000',
            explanation: 'merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5',
        },
        
    ],
    constraints: `<li class='mt-2'>
  <code>nums1.length == m</code>
</li> <li class='mt-2'>
<code>nums2.length == n</code>
</li> <li class='mt-2'>
<code>0 <= m <= 1000</code>
</li>
<li class='mt-2 text-sm'>
<code>0 <= n <= 1000</code>
</li> <li class='mt-2 text-sm'>
<code>1 <= m + n <= 2000</code>
</li><li class='mt-2 text-sm'>
<code>-10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup></code>
</li>`,
    handlerFunction: handlerAddMedianTwoArray,
    starterCode: starterCodeAddMedianTwoArray,
    order: 302,
    starterFunctionName: 'function findMedianSortedArrays(',
};
