let selectElementsStartingWithA = (array) => {
    return array.filter((array) => array.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
    //Then, /^[aeiou]/i means:
    // matches the start of the string.[aeiou] matches any of the characters inside the square brackets, a single time.i is a case-insensitive modifier.
}

let removeNullElements = (array) => {
    return array.filter(x => x !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !== null && x !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(x => (x.split("").reverse()).join(""));
}

let everyPossiblePair = (array) => {
    return array.sort().flatMap((value, index) => array.slice(index + 1).map(word => [value, word]))
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, 10);
}

let addElementToBeginning = (array, element) => {
    array = [element].concat(array);
    return array;
}
let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.substring(0, 3);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {

    let isPalindrome = 0;

    for (let i = 0; i < array.length / 2; i++) {

        if (array[i] !== array[array.length - i]) {
            isPalindrome++;

        }
    }

    return isPalindrome;
}


let shortestWord = (array) => {
    return array.reduce((a, b) => a.length <= b.length ? a : b)
}

let longestWord = (array) => {
    return array.sort(function (a, b) {
        return b.length - a.length
    })[0];
}

let sumNumbers = (array) => {
    return array.reduce(function (a, b) {
        return a + b;
    })

}

let repeatElements = (array) => {
    return [...array, ...array]
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];

    }
    return sum / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    //     function suffisammentGrand(element) {
    //         return element < 6 ;
    //       }
    //       var filtre = array.filter(suffisammentGrand);
    // return filtre.filter(function(ele , pos){
    //     return array.indexOf(ele) == pos ;
    // }) 
    return array.splice(0, 6)
}

let convertArrayToObject = (array) => {
    let entries = new Map([
        [array[0], array[1]],
        [array[2], array[3]],
        [array[4], array[5]],
    ]);
    const obj = Object.fromEntries(entries);
    return obj;
}

let getAllLetters = (array) => {
    array1 = array.join("");
    let array2 = [];
    for (let i = 0; i < array1.length; i++) {
        array2.push(array1[i]);

    }
    array2 = array2.sort()
    return [...new Set(array2)];/*Array.from(new Set(array2))*/
}

let swapKeysAndValues = (object) => {
    const swapped = Object.fromEntries(Object.entries(object).map(a => a.reverse()))
    return swapped;
}

let sumKeysAndValues = (object) => {
    let tab = Object.values(object);
    var tab2 = Object.keys(object).join(",").split(",").map(x => +x);
    var result = 0;

    for (i = 0; i < tab.length; i++) {
        result += tab[i]; // on additionne d'abord les valeur de tab
    }
    for (j = 0; j < tab2.length; j++) {
        result += tab2[j]; // puis on ajoute les valeurs de tab2
    }
    return result;
}

let removeCapitals = (string) => {
    return string.match(/[^A-Z]/g, '').join("")
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let year = date.getFullYear().toString();
    let day = (date.getDay() + 1).toString();
    let month = (date.getMonth() + 1).toString();
    return "0" + day + "/" + "0" + month + "/" + year;
}

let getDomainName = (string) => {
    // string.split("@").pop().split(".").slice(0,1).join("")
    return string.filter(@);
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
