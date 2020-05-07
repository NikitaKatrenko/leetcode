let lengthOfLongestSubstring = function(s) {
    let tmp = '';
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let index = tmp.indexOf(s[i]);

        if (index !== -1) {
            tmp = tmp.substring(index + 1);
        }

        tmp += s[i];
        res = Math.max(res, tmp.length);
    }


    return res;
};