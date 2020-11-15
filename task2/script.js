const arr = [1, -2, 4, -5, 6, 0, 13, 3, 21, -23];

function getPositiveNumbersAverage(numbersArray) {
    const positives = numbersArray.filter(num => num > 0);
    return positives.reduce((total, current) => total + current) / positives.length;
}

console.log(getPositiveNumbersAverage(arr));