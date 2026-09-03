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

        const bucketList = Array(nums.length).fill(null)
        
        const seenEntries = [...seen.entries()]
        
        for (let i = 0; i < seenEntries.length; i++) {
            const currentIndex = seenEntries[i][0]
            const currentValue = seenEntries[i][1]

            const currentBucket = bucketList[currentValue]

            if(currentBucket) {
                bucketList[currentValue] = [...currentBucket, currentIndex]
            } else {
                bucketList[currentValue] = [currentIndex]   
            }
        }

        const result = []
        
        for (let i = bucketList.length - 1; i >= 0; i--) {
            const current = bucketList[i]

            if(current !== null) {
                result.push(...current)
            }

            if(result.length >= k) break
        }

        return result.slice(0, k)
    }
}
