/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positives = nums.filter(n => n > 0);
    const negatives = nums.filter(n => n < 0);
    const result = [];

    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i], negatives[i]); // Alternate between positive and negative
    }

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray2 = function(nums) {
    const result = new Array(nums.length).fill(0);
    let positive = 0;
    let negative = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[positive] = nums[i];
            positive += 2;
        } else {
            result[negative] = nums[i];
            negative += 2;
        }
    }

    return result;
};