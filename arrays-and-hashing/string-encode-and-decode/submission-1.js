class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "#EMPTY"
        return strs.join("#SEPARATOR")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "#EMPTY") return []
        return str.split("#SEPARATOR")
    }
}
