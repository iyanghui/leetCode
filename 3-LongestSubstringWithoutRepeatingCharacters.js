var lengthOfLongestSubstring = function(s) {
    var arrtemp = [],
        objtemp = {},
        count = 0,
        keyset = [];
    for (var i = 0; i < s.length; i++) {
        
        if (arrtemp.indexOf(s[i]) === -1) {
            arrtemp.push(s[i]);
            objtemp[arrtemp.join("")] = ++count;
            delete objtemp[arrtemp.slice(0, arrtemp.length - 1).join("")];
        } else {
            arrtemp = [];
            count = 0;
        }
    }
    
    for (var prop in objtemp) {
        keyset.push(objtemp[prop]);
    }

    var key = Math.max.apply(this, keyset);
    for (var prop in objtemp) {
        if (objtemp[prop] === key) {
            return prop;
        }
    }
    return "";
};


console.log(lengthOfLongestSubstring("pwwkew"));