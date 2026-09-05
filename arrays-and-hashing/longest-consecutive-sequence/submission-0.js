class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // Use Set for O(1) lookup with has() method 
        const numsSet = new Set(nums)

        let maxLength = 0

        for (const num of numsSet) {
            const prev = num - 1
            let currentLength = 1

            // Is it the first number of the sequence?
            if (!numsSet.has(prev)) {
                let count = num

                // Increment current length if sequence continues
                while (numsSet.has(count + 1)) {
                    currentLength++
                    count++
                }
            }

            // Assign current length to max length if greater
            if (currentLength > maxLength) {
                maxLength = currentLength
            } 
        }

        return maxLength
    }
}
