class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const results = new Map()

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]

            results.set(target - current, i)
        }   

        for (let j = 0; j < nums.length; j++) {
            const current = nums[j]

            if(results.has(current)) {
                const i = results.get(current)  
                if (j != i) {
                    return [j, i]
                }
            }
        }   

        return []
    }
}
