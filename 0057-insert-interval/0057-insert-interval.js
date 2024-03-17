/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const returnInterval = [];
    let startIndexCompleted = false;
    let endCompleted = false;
    if (!intervals.length) {
        return [newInterval];
    }

    for (let i = 0; i < intervals.length; i++) {
        if (!startIndexCompleted) {
            if (newInterval[1] < intervals[i][0]) {
                returnInterval.push(newInterval);
                returnInterval.push(...intervals.slice(i));
                return returnInterval;
            }
            if (newInterval[0] <= intervals[i][1]) {
                startIndexCompleted = true;
                newInterval[0] =
                    newInterval[0] >= intervals[i][0] ? intervals[i][0] : newInterval[0];
                if (newInterval[1] <= intervals[i][1]) {
                    newInterval[1] = intervals[i][1];
                    returnInterval.push(newInterval);
                    returnInterval.push(...intervals.slice(i + 1));
                    endCompleted = true;
                    break;
                }
            } else {
                returnInterval.push(intervals[i]);
            }
        } else {
            if (newInterval[1] < intervals[i][0]) {
                returnInterval.push(newInterval);
                returnInterval.push(...intervals.slice(i));
                endCompleted = true;
                break;
            } else if (newInterval[1] <= intervals[i][1]) {
                newInterval[1] = intervals[i][1];
                returnInterval.push(newInterval);
                returnInterval.push(...intervals.slice(i + 1));
                endCompleted = true;
                break;
            }
        }
    }
    if (!startIndexCompleted || !endCompleted) {
        returnInterval.push(newInterval);
    }
    return returnInterval;
};