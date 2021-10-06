function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

divider('Aufgabe 1');

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b)
{
    const newArr = arr.filter(number =>
    {
        return number >= a && number <= b
    });
    return newArr;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

divider('Aufgabe 2');

let arrTwo = [5, 3, 8, 1];

function filterRangeInPlace(arrTwo, a, b)
{
    arrTwo.forEach((number, index, array) =>
    {
        if(number > a || number < b)
        {
            array.splice(index, 1);
        }
    });
    return arrTwo;
}
console.log(filterRangeInPlace(arrTwo, 1, 4));
console.log(arrTwo);
