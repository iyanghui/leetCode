function convert(str, row) {
    if (row < 3) {
        return;
    }
    let col = 0;

    let len = str.length;
    
    let numCycle = row * 2 - 2; // 每个周期的字符数量
    let colCycle = row - 1;  // 每个周期占据的行数

    let n = parseInt(len / numCycle);
    let r = len % numCycle;

    col = n * (row - 1);
    if (r > 0) {
        col += 1;
        if (r / row >= 1) {
            col += (r - row);
        }
        
    }

    let arr = [];

    for (let i = 0; i < row; i++) {
        arr[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            arr[i][j] = '*';
        }
    }

    let rowIndex = 0;

    let nTmp = 0;
    let rTmp = 0;
    let s  = '';
    let isAdd = true;

    let colIndex;
    for (let i = 0, iLen = str.length; i < iLen; i++) {
        colIndex = 0;

        s = str.charAt(i);

        nTmp = parseInt((i + 1) / numCycle);
        rTmp = (i + 1) % numCycle;
    
        if (i < numCycle) {
            // 第一个周期
            colIndex = colIndex + 1;
            
            if (rTmp === 0) {
                colIndex += (colCycle - 1);
            } else {
                if (rTmp / row > 1) {
                    colIndex += rTmp % row;
                }
            }
        } else {
            colIndex = nTmp * colCycle;
            if (rTmp === 0) {
                
            } else {
                colIndex = colIndex + 1;
                if (rTmp / row > 1) {
                    colIndex += rTmp % row;
                }
            }
        }

        arr[rowIndex][colIndex - 1] = s;
        
        if (isAdd) {
            rowIndex += 1;
            if (rowIndex === row) {
                rowIndex -= 2;
                isAdd = false;
            }
        } else {
            rowIndex -= 1;
            if (rowIndex < 0) {
                rowIndex += 2;
                isAdd = true;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        console.log(a.join(' '));
    }
}

convert('helloworldhowareyou', 4);