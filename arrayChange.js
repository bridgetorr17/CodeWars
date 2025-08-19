/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    operations.forEach((op) => {
        nums[nums.indexOf(op[0])] = op[1];
    })

    return nums;
};