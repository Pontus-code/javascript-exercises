const removeFromArray = function(p1,p2,p3,p4,p5) {
    let array = p1
    let toRemove = [p2,p3,p4,p5]
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        removeMe = ""
        for (let j = 0; j < toRemove.length; j++) {
            if (array[i] === toRemove[j]) {
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
