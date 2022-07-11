/**
 * Write a function to check whether two given strings are anagrams of each
other. An anagram of a string is another string that contains the same
characters, only the order of characters can be different. For example,
“abcd” and “dabc” are anagrams of each other.

Examples:

Input: ABCD, DABC
Output: true

Input: AABB, BBAA
Output: true

Input: AAAB, AAB
Output: false

Input: AAAB, AABC
Output: false

Input: ACBA, ABBC
Output: false

Input: A, B
Output: false
 */

const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  // Sort the two strings and then check if the result is exactly the same.
  sortedString1 = string1.split('').sort().join('');
  sortedString2 = string2.split('').sort().join('');

  // Return true if the results are the same
  if (sortedString1 === sortedString2) {
    return true;
  }

  // Otherwise return false to note that the two strings is not an anagram
  return false;
}
