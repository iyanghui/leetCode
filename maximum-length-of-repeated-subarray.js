/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var iLen = A.length,
        jLen = B.length,
        max = 0;
    var arr = [];
    for (var i = 0; i < iLen + 1; i++) {
        var tmpArr = [];
        for (var j = 0; j < jLen + 1; j++) {
            tmpArr[j] = 0;
        }
        arr[i] = tmpArr;
    }
    for (var i = 1; i <= iLen; i++) {
        for (var j = 1; j <= jLen; j++) {
            if (A[i - 1] === B[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
                max = Math.max(max, arr[i][j]);
            }
        }
    }
    console.log(arr)
    return max;
};