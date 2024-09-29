function findLargest(arr) {
    let largest = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    
    return largest;
}


const numbers = [10, 20, 71, 5, 40];
console.log(findLargest(numbers)); 