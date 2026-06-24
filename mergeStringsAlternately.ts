/*
https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
Leetcode 1768. Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

 

//Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r */


function mergeAlternately(word1: string, word2: string): string {

    let extraCharacters = '';

    if (word1.length > word2.length) {
        extraCharacters = word1.slice(word2.length);
        const mergedWords = merge(word1, word2, word2.length);
        return mergedWords + extraCharacters;
    } else if (word1.length < word2.length) {
        extraCharacters = word2.slice(word1.length);
        const mergedWords = merge(word1, word2, word1.length);
        return mergedWords + extraCharacters;
    } else {
        const mergedWords = merge(word1, word2, word2.length);
        return mergedWords + extraCharacters;
    }
};

function merge(word1: string, word2: string, length: number) {
    let mergedWords = '';
    for (let i = 0; i < length; i++) {
        mergedWords += word1[i] + word2[i];
    }

    return mergedWords;
}
