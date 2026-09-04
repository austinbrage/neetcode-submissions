class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""

        for (const str of strs) {
            encodedStr += `${str.length}#${str}`
        }

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStr = []

        let i = 0;

        while (i < str.length) {
            let j = i

            // Find the "#"
            while (str[j] !== "#") {
                j++
            }

            const wordLength = Number(str.slice(i, j))
            const word = str.slice(j + 1, j + 1 + wordLength)

            decodedStr.push(word)

            i = j + 1 + wordLength
        }

        return decodedStr
    }
}
