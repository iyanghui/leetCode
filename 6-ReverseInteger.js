var reverse = function(x) {    
    let s = 0;

    while(x) {
        s = s * 10 + (x % 10);
        x = parseInt(x / 10);
    }

    if (s < (0 - Math.pow(2, 31)) || s > Math.pow(2, 31)) {
        return 0;
    }
    return s;
};