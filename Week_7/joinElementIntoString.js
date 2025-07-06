// Task 1: Join array elements into a string
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));   // "Red,Green,White,Black"
console.log(myColor.toString());  // "Red,Green,White,Black"
console.log(myColor.join("+"));   // "Red+Green+White+Black"

// Task 2: Find the most frequent element in an array
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) 
{
    let frequency = {};
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let item of arr) 
        {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) 
            {
            maxCount = frequency[item];
            mostFrequentElement = item;
        }
    }

    return `${mostFrequentElement} ( ${maxCount} times )`;
}

console.log(findMostFrequent(arr1)); // a ( 5 times )

// Task 3: Truncate a string to a given length
function truncateString(str, num) 
{
    return str.substring(0, num);
}

console.log(truncateString("Robin Singh", 4)); // "Robi"

// Task 4: Capitalize the first letter of each word
function capitalizeWords(str) 
{
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords('js string exercises')); // "Js String Exercises"
 