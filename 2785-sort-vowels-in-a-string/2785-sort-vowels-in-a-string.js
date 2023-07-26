/**
 * @param {string} s
 * @return {string}
 */


var sortVowels = function (s) {
     const charFreq = new Array(128).fill(0);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelIndexArr=[65, 69, 73, 79, 85, 97, 101, 105, 111, 117 ];
    let vowelIndex = 0;
    const map = new Map();
    for(let i=0; i<vowels.length; i++){
        map.set(vowels[i], 1);
        map.set(vowels[i].toUpperCase(), 1);
    }
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) {
            charFreq[s[i].charCodeAt(0)]++;
        }
    }
    const chars = s.split('');
    for(i=0; i< chars.length; i++) {
        if(map.has(chars[i])) {
            while(!charFreq[vowelIndexArr[vowelIndex]]) {
                vowelIndex++;
            }
            chars[i] = String.fromCharCode(vowelIndexArr[vowelIndex]);
            charFreq[chars[i].charCodeAt(0)]--;
        }
    }
   return chars.join('')
};