const removeFromArray = function(array, ...args) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        removeMe = ""
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                removeMe = "yes"
            } 
        }
        if (removeMe != "yes") {
            newArray.push(array[i])
        }
    }
    return newArray
}
// Do not edit below this line
module.exports = removeFromArray;
