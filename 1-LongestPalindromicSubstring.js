function check(index, str) {
    var isOk = true;
    for (var i = 0; i < index; i++) {
        if (str[index - i] != str[index + i]) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

var longestPalindrome = function(s) {
    var obj = {},
        arr = [],
        temp = [];
    for (var i = 1, len = s.length; i < len; i++) {
        if (check(i, s)) {
            obj[i] = s.substr(0, i);
        }
    }

    if (Object.keys(obj).length == 0) {
        return s.charAt(0);
    } else {
        for (var key in obj) {
            arr.push(obj[key]);
        }
        arr.forEach(function(value, key) {
            temp.push(value.length);
        });

        return arr[temp.indexOf(Math.max.apply(null, temp))];
    }
};



console.log(longestPalindrome("cbbd"));