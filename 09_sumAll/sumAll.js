const sumAll = function(p1, p2) {

    let lowest = p1
    let highest = p2

    if (lowest > highest) {
        lowest = p2
        highest = p1
    }

    if (lowest < 0 || highest < 0) {
        return "ERROR"
    }

    if (typeof(lowest) != "number" || typeof(highest) != "number") {
        return "ERROR"
    }

    if (lowest != lowest.toFixed(0) || highest != highest.toFixed(0)) {
        return "ERROR"
    }




    let result = 0
    for (let i = lowest; i < highest+1; i++) {
        result = result + i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
