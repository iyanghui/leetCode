/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
    let x = x_center;
    let y = y_center;

    if (x_center < x1) {
        x = x1;
    } else if (x_center > x2) {
        x = x2;
    }

    if (y_center < y1) {
        y = y1;
    } else if (y_center > y2) {
        y = y2;
    }

    return Math.pow(x - x_center, 2) + Math.pow(y - y_center, 2) <= Math.pow(radius, 2);
};

let flag = checkOverlap(1, 0, 0, -1, 0, 0, 1);
console.log(flag);