/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1,
            r = n;
        while(l < r - 1) {
            let mid = parseInt((l + r) / 2);
            if (isBadVersion(mid)) {
                r = mid;
            } else {
                l = mid;
            }
        }
        return isBadVersion(l) ? l : l + 1;
    };
};