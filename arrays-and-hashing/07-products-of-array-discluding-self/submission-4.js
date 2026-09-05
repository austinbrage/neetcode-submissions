class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const result = Array(nums.length).fill(1)

        let prefix = 1

        // Left products
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix
            prefix *= nums[i]
        }

        prefix = 1

        // Right products
        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] *= prefix
            prefix *= nums[j]
        }

        return result
    }
}
