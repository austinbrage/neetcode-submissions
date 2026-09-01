class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()

        for(let i = 0; i < nums.length; i++) {
            const current = nums[i]

            if(seen.has(current)) {
                return true
            } else {
                seen.add(current)
            }
        }

        return false
    }
}
