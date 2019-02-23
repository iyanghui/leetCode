/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }
  var len = strs[0].length,
    commonStr = '',
    commonChar = '';

  var index = 0;
  while (index < len) {
    commonChar = strs[0].charAt(index);

    for (var i = 1, iLen = strs.length; i < iLen; i++) {
        if (strs[i].charAt(index) !== commonChar) {
            return commonStr;
        }
    }
    commonStr += commonChar;
    index++;
  }

  return commonStr;
};