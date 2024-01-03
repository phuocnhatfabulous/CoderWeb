import { Problem } from '../types/problem';
import { jumpGame } from './jump-game';
import { reverseLinkedList } from './reverse-linked-list';
import { search2DMatrix } from './search-a-2d-matrix';
import { twoSum } from './two-sum';
import { validParentheses } from './valid-parentheses';
import { addTwoNumbers } from './add-two-numbers';
import { longestSubstring } from './longest-substring-without-repeating-characters';
import { MedianTwoArrays } from './median-two-sorted-arrays';
import { LongestSubstring } from './longest-palindromic-substring';
import { ZigzagConversion } from './zigzag-conversion';
import { RevertInteger } from './reverse-integer';
import { StringToInteger } from './string-to-integer';
import { PalindromeNumber } from './palindrome-number';
import { RegularExpressionMatching } from './regular-expression-matching';

interface ProblemMap {
    [key: string]: Problem;
}

export const problems: ProblemMap = {
    'two-sum': twoSum,
    'Add Two Numbers': addTwoNumbers,
    'Longest Substring Without Repeating Characters': longestSubstring,
    'Median of Two Sorted Arrays': MedianTwoArrays,
    'Longest Palindromic Substring': LongestSubstring,
    'Zigzag Conversion': ZigzagConversion,
    'Reverse Integer': RevertInteger,
    'String to Integer (atoi)': StringToInteger,
    'Palindrome Number': PalindromeNumber,
    'Regular Expression Matching': RegularExpressionMatching,





    'reverse-linked-list': reverseLinkedList,
    'jump-game': jumpGame,
    'search-a-2d-matrix': search2DMatrix,
    'valid-parentheses': validParentheses,
};
