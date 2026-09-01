# Valid Anagram

## Algorithm

1. If `s` and `t` have different lengths, return `false`.
2. Create a `Map` to store the frequency of each character in `s`.
3. Traverse `s` and increment the count for each character.
4. Traverse `t` and decrement the count for each character.
5. If a character doesn't exist in the `Map`, or its count becomes negative, return `false`.
6. If the loop finishes without finding a mismatch, return `true`.

## Data Structure

Hash Map (`Map`) for storing character frequencies with constant-time average lookups and insertion.

## Complexity

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n)` — we traverse both strings once.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Map` can store up to `n` characters.

> “The time complexity is O(n), or in order of n, because we traverse both strings once. The space complexity is O(n), because we store the character frequencies in a Map.”
