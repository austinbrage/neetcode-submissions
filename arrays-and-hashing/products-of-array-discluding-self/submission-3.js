class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let product = 1

        let zeroCount = 0

        for (const num of nums) {
            if (num !== 0) {
                product *= num
            } else {
                zeroCount++
            }
        }

        if (zeroCount > 1) {
            product = 0
        }

        const result = Array(nums.length).fill(product)

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                result[i] = product
            } else if(zeroCount >= 1) {
                result[i] = 0
            } else {
                result[i] /= nums[i]
            }
        }

        return result
    }
}
