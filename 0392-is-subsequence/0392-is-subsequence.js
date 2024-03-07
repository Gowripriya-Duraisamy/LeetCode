/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0;
    if(s.length === t.length && s==="") return true;
    for(let i=0; i<t.length; i++) {
        if(s[index] === t[i]) {
            index++;
        }
        if(index === s.length) return true;
    }
    return false;
};