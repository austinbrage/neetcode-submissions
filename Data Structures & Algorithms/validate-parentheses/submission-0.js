class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        for (const char of s.split("")) {
            switch (char) {
                case "(":
                    stack.push(1)
                    break;
                case ")":
                    if (stack.pop() !== 1) {
                        return false
                    }
                    break;
                
                case "[":
                    stack.push(2)
                    break;
                case "]":
                    if (stack.pop() !== 2) {
                        return false
                    }
                    break;
                
                case "{":
                    stack.push(3)
                    break;
                case "}":
                    if (stack.pop() !== 3) {
                        return false
                    }
                    break;
                
                default: 
                    continue
            }
        }

        return stack.length === 0
    }
}
