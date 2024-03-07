var compress = function (chars) {
    let index = 1;
    let cChar = chars[0];
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === cChar) count++;
        else {
            if (count > 1 && count < 10) {
                chars[index] = `${count}`;
                index++;
            }
            if (count >= 10) {
                let countStr = `${count}`;
                for (let c = 0; c < countStr.length; c++) {
                    chars[index] = countStr[c];
                    index++;
                }
            }
            cChar = chars[i];
            count = 1;
            chars[index] = cChar;
            index++;
        }
    }
    if (count > 1 && count < 10) {
        chars[index] = `${count}`;
        return index + 1;
    }
    if (count >= 10) {
        let countStr = `${count}`;
        for (let c = 0; c < countStr.length; c++) {
            chars[index] = countStr[c];
            index++;
        }
    }
    return index;
};