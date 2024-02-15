/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // Sort the array in non-decreasing order
    nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    // Iterate through the array from the end to find the first set of numbers that can form a polygon
    for (let i = nums.length - 1; i >= 2; i--) {
        sum -= nums[i]; // Remove the current element (considered as the longest side) from the sum

        if (sum > nums[i]) {
            // If found, return the sum of these numbers as the perimeter
            return sum + nums[i];
        }
    }

    // If no such set of numbers is found, return -1
    return -1;
};