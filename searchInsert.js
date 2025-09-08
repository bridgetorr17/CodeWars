/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.includes(target)){
        let counter = 0;
        while(target > nums[counter]) counter++;
        return counter;
    }

    return nums.indexOf(target);
};