/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    const blockSum = (i, j) => {
        const minRow = i - k > 0 ? i - k : 0;
        const maxRow = i + k < mat.length ? i + k : mat.length - 1;
        const minCol = j - k > 0 ? j - k : 0;
        const maxCol = j + k < mat[0].length ? j + k : mat[0].length - 1;

        let sum = 0;
        for (let k = minRow; k <= maxRow; k++) {
            for (let l = minCol; l <= maxCol; l++) {
                sum += mat[k][l]
            }
        }
        return sum;
    }

    const blockMatrix = new Array(mat.length).fill().map(_ => new Array(mat[0].length).fill(0));
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            blockMatrix[i][j] = blockSum(i, j);
        }
    }
    return blockMatrix;
};