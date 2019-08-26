/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0 || denominator === 0) {
        return '0';
    }
    var res = [];
    var isNegative = false;

    if (numerator < 0) {
        isNegative = !isNegative;
        numerator = Math.abs(numerator);
    }
    if (denominator < 0) {
        isNegative = !isNegative;
        denominator = Math.abs(denominator);
    }
    
    var obj = {};
    var index = 0;
    
    if (isNegative) {
        res.unshift('-');
        index++;
    }

    // can't use parseInt(numerator / denominator);
    res.push(Math.floor(numerator / denominator));
    numerator %= denominator;
    if (numerator === 0) {
        return res.join('');
    }
    
    res.push('.');

    while(numerator > 0) {
        
        // reminder equal
        if (obj.hasOwnProperty(numerator)) {
            break;
        }
        
        obj[numerator] = index++;
        numerator *= 10;
        res.push(Math.floor(numerator / denominator));
        numerator %= denominator;
    }

    if (numerator !== 0) {
        // + 2, the position of decimail point
        res.splice(2 + obj[numerator], 0, '(');
        res.push(')');
    }

    
    return res.join('');
};

// console.log(fractionToDecimal(2, 3))
// console.log(fractionToDecimal(7, -12))

// console.log(fractionToDecimal(1, 214748364))
console.log(fractionToDecimal(-2147483648, 1))