const palindromes = function (string) {

    let newString = string.replace(/\s+/ig, "") // Remove white spaces

    newString = newString.replace(/\p{P}/gu, "") // Remove punctuations

    newString = newString.toUpperCase()


    arrayString = newString.split("")

    for (let i = 0; i < arrayString.length; i++) {
        console.log("Element number " + i +" is " + arrayString[i] + "\nand element number " + (arrayString.length - 1 - i) + " is " + arrayString[arrayString.length - 1 - i])
        if (arrayString[i] != arrayString[arrayString.length - 1 - i]) {
            return false
        }
    }
    return true
}
// Do not edit below this line
module.exports = palindromes;
