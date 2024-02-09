/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const length = new Array(n).fill(1);
    const previousIndex = new Array(n).fill(-1);
    let maxLen = 1;
    let lastIndex = 0;

    for (let i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && length[i] < length[j] + 1) {
                length[i] = length[j] + 1;
                previousIndex[i] = j;
            }
        }

        if (length[i] > maxLen) {
            maxLen = length[i];
            lastIndex = i;
        }
    }

    const subset = [];
    for (let i = lastIndex; i >= 0; i = previousIndex[i]) {
        subset.unshift(nums[i]);
        if (previousIndex[i] === -1) {
            break
        }
    }

    return subset;
};