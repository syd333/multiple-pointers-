// MULTIPLE POINTERS
// creating pointers or values that correspond to an index or position and move 
    // towards the beginning, end, or middle based on a certain condition

// EXAMPLE :::
    // write a function called sumZero which accepts a sorted array of integers.
    // the function should find the first pairs where the sum is 0.
    // return an array that includes both values that sum to zero or undefined if a pair 
        // does not exist 

        function sumZero (arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = i+1; j < arr.length; j++) {
                    if (arr[i] + arr[j] === 0) {
                        return [arr[i], arr[j]]
                    }
                }
            }
        }

        sumZero([-4, -3, -2, -1, 0, 1, 2, 5])