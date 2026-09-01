class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false
        }

        const letters_s = new Map()

        for (let i = 0; i < s.length; i++) {
            const current_s = s[i]

            if(letters_s.has(current_s)) {
                const currentValue = letters_s.get(current_s)
                letters_s.set(current_s, currentValue + 1)
            } else {
                letters_s.set(current_s, 1)
            }
        }

        for (let j = 0; j < t.length; j++) {
            const current_t = t[j]

            if(!letters_s.has(current_t)) {
                return false
            } else {
                const currentValue = letters_s.get(current_t)
                const newValue = currentValue - 1
                if (newValue < 0) {
                    return false
                } else {
                    letters_s.set(current_t, newValue)
                }
            }
        }

        return true
    }
}
