'use strict';

// Complete the repeatedString function below.
function repeatedString(s, n) {
    if ((s.length === 1 && s === 'a')) {
        return n
    }

    if ((s.length === 1 && s !== 'a')) {
        return 0
    }

    if (s.length === n) {
        return s.filter(a => a === 'a').length;
    }

    const numberOfRepeats = parseInt(n/s.length);
    const remainder = n%s.length;
    const remainingCharacters = s.slice(0, remainder);
    const aInRemainders = remainingCharacters.split('').filter(a => a === 'a').length;

    const aInS = s.split('').filter(a => a === 'a').length;

    const finalAnswer = (aInS * numberOfRepeats) + aInRemainders;
    return finalAnswer

}
