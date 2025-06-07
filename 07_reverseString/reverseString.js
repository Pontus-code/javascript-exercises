const reverseString = function(string) {
    let text = string
    let array = string.split("")
    array.reverse()
    let reverseText = array.join("")

    return reverseText
};

// Do not edit below this line
module.exports = reverseString;
