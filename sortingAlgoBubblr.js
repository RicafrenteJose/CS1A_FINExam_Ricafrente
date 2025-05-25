let numbers = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number ${i + 1}:`);
    if (input) numbers.push(Number(input));
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log("Swapped:", arr);
            }
        }
    }
    return arr;
}

console.log("Original Array:", numbers);
let sorted = bubbleSort(numbers);
console.log("Sorted Array:", sorted);
