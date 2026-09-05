class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const seen = new Map()

        for (let i = 0; i < nums.length; i++) {

            const current = nums[i]

            if (seen.has(current)) {
                const value = seen.get(current)
                seen.set(current, value + 1)
            } else {
                seen.set(current, 1)
            }
        }

        const result = []

        let seenEntries = [...seen.entries()]
        seenEntries.sort((a,b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            const currentKey = seenEntries[i][0]
            result.push(currentKey)
        }

        return result
    }
}
