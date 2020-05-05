/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    let char = '';

    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], i+1);
        } else {
            map.set(s[i], false);
        }
    }


    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i])) return map.get(s[i]) - 1;
    }

    return -1;
};