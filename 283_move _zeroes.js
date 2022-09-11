/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    if(!nums.includes(0)){
        return
    }
    nums.sort((a,b) => {
        if (a !== 0 && b === 0) return -1;
        if (a === 0 && b !== 0) return 1;
        return 0;
    })
};

/* An other solution */
/*
    let left = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
	return nums;
*/
