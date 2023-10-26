const reverseString = function(stringValue) {
    let reverseString = "";
    for (let i = stringValue.length - 1; i >= 0; i--) {
        reverseString += stringValue.charAt([i]);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
