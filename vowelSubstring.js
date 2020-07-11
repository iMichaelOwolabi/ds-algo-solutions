// Vowel Substring

function hasVowel(str) {
  if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
      return true;
  }
  return false;
}

function numberOfVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
          count += 1
      }
  }
  return count;
}

function findSubstring(s, k) {
  // Write your code here

  const result = [];
  const vowelCount = [];

  if (s.length === 1 && (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u')) {
      return s
  }

  if (!hasVowel(s)) {
      return 'Not found!';
  }
  
  for (let i = 0; i < s.length; i++) {
      if (i + k >= s.length) {
          continue;
      }
      let sub = s.slice(i, i + k)
      if (!hasVowel(sub)) {
          continue
      }

      result.push(sub);
      vowelCount.push(numberOfVowels(sub));
  }

  const indexOfHighestCount = vowelCount.indexOf(Math.max(...vowelCount))

  return result[indexOfHighestCount]

}