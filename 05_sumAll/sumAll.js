const sumAll = function(startNum, endNum) {
    let sumNum = 0 ;
    if (startNum < 0 || endNum < 0) return "ERROR";
    if (startNum > endNum) {
        for (let i = endNum; i <= startNum; i++) {
            sumNum += i;
        }
    } else{
        for (let i = startNum; i <= endNum; i++) {
            sumNum += i;
        }
    } 
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
