class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = new Map()

        // Count frequencies
        for (const num of nums) {
            const frequency = frequencies.get(num) ?? 0
            frequencies.set(num, frequency + 1)
        }

        // Group numbers by frequency
        const buckets = Array(nums.length + 1).fill(null)

        for (const [num, frequency] of frequencies) {
            if (buckets[frequency] === null) {
                buckets[frequency] = []
            }

            buckets[frequency].push(num)
        }

        // Get the k most frequent numbers
        const result = []

        for (let freq = buckets.length - 1; freq >= 0; freq--) {
            const bucket = buckets[freq]

            if (bucket !== null) {
                result.push(...bucket)
            }

            if (result.length >= k) break
        }

        return result.slice(0, k)
    }
}
