/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
   if(deck.length <= 2) return deck.sort((a,b) => a-b);
    deck.sort((a,b) => b-a);
    const resultArr = new Array(deck.length);
    let position = 0;
    let indexArr = Array.from(Array(deck.length).keys());
    while(deck.length) {
        const modifiedIndexArr = [];
        let i = position;
        i === 1 && modifiedIndexArr.push(indexArr[0]);
        for(; i < indexArr.length; i = i+2) {
            resultArr[indexArr[i]] = deck.pop();
            i+1 < indexArr.length && modifiedIndexArr.push(indexArr[i+1]);
        }
        position = indexArr[i-2] === indexArr.pop() ? 1 : 0
        indexArr = [...modifiedIndexArr];
    }
    return resultArr;
};