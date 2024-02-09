/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1; // Start from the second element

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j] || nums[i] !== nums[j - 1]) {
            // If the current element is not the same as the last two elements,
            // move it to the next position in the "unique" part of the array
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1; // Return the length of the "unique" part of the array
};

// Simpler solution

var removeDuplicatesImproved = function(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};