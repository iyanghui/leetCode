var myAtoi = function(str) {
    let len = len1 = str.length;
    let isStart = false;
    let arr = [];

    while(len) {
      let code = str.charCodeAt(len1 - len);
      if (!isStart && code !== 32) {
        isStart = true;
        if (code !== 43 && code != 45 && (code < 48 || code > 57)) {
          return 0;
        }
      }
      if (isStart) {
        if (arr.length > 0 && (code < 48 || code > 57)) {
          break;
        }
        arr.push(str.charAt(len1 - len));
      }
      len--;
    } 
    console.log(arr);
    let n = parseInt(arr.join(''));
    if (n > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    }
    if (n < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    }
    return n;
};