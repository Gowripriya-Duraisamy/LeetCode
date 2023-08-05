/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((person1, person2) => person1[1] -person2[1]);

    const resultPeople = [people[0]];
    for(let i=1; i<people.length; i++) {
        let indexTolerance = people[i][1];
        let index = 0;
       while(true) {
            if(index > resultPeople.length-1) {
                resultPeople.push(people[i]);
                break;
            } else if(resultPeople[index][0] >= people[i][0] ) {
               if(indexTolerance === 0) {
                resultPeople.splice(index, 0, people[i])
                break;
               } else {
                indexTolerance --;
                index++;
               }
            } else {
                index++
            }
       }
    }

    return resultPeople;
};