/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const row = new Map();
    const column = new Map();
    let rowIndex = 1;
    let columnIndex = 1;
    const charCodeSort =(a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            const charA = a.charCodeAt(i);
            const charB = b.charCodeAt(i);
            if(charA > charB) return 1;
            else if(charB> charA) return -1;
        }
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;
        return 0;
    }
    orders.sort((a, b) => a[1] - b[1] ).forEach(order => {
        if(!row.has(order[1])) {
            row.set(order[1], rowIndex);
            rowIndex++;
        }
    })
    orders.sort((a,b) => charCodeSort(a[2], b[2])).forEach(order => {
        if(!column.has(order[2])) {
            column.set(order[2], columnIndex);
            columnIndex++;
        }
    })
    const resultArr = new Array(row.size + 1).fill().map(_ => new Array(column.size + 1).fill("0"));
    let rIndex = 0;
    let cIndex = 0;
    resultArr[rIndex][cIndex] = "Table"
    for(const value of row.keys()) {
        rIndex++
        resultArr[rIndex][cIndex] = value
    }
    rIndex = 0;
    for(const value of column.keys()) {
        cIndex++
        resultArr[rIndex][cIndex] = value
    }

    orders.forEach(order => {
        const rowPosition = row.get(order[1]);
        const columnPosition = column.get(order[2]);
        const tempValue = +resultArr[rowPosition][columnPosition] + 1;
        resultArr[rowPosition][columnPosition] = `${tempValue}`
    })

    return resultArr;
};