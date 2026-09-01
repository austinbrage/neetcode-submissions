class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const words = new Map()

        for (let i = 0; i < strs.length; i++) {
            const currentWord = strs[i]

            const key = currentWord.split("").sort().join("")

            if(words.has(key)) {
                const value = words.get(key)
                words.set(key, [...value, currentWord])
            } else {
                words.set(key, [currentWord])
            }
        }

        return [...words.values()]
    }
}
