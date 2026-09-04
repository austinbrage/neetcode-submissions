class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const subBoxes = new Map()

        const rows = new Map()
        const columns = new Map()

        for (let i = 0; i < board.length; i++) {
            const row = board[i]
            const rowIndex = Math.floor(i / 3)

            for (let j = 0; j < row.length; j++) {
                const cell = row[j]
                let columnIndex = Math.floor(j / 3)

                // Skip processing empty cells
                if (cell === ".") {
                    continue
                }

                const storeRow = rows.get(i) ?? new Set()

                // row already includes current cell
                if (storeRow.has(cell)) {
                    return false
                }

                rows.set(i, storeRow.add(cell))

                const storeColumn = columns.get(j) ?? new Set()
                
                // column already includes current cell
                if (storeColumn.has(cell)) {
                    return false
                }

                columns.set(j, storeColumn.add(cell))

                const subBoxIndex = `${rowIndex}-${columnIndex}`
                const subBox = subBoxes.get(subBoxIndex) ?? new Set()

                // subBox already includes current cell
                if (subBox.has(cell)) {
                    return false
                }

                subBoxes.set(subBoxIndex, subBox.add(cell))
            }
        }

        return true
    }
}
