# Valid Anagram

## Algorithm

Traverse `s` to count the frequency of each character. Then traverse `t` and decrement the corresponding count. If a character doesn't exist or its count becomes negative, return `false`.

## Data Structure

Hash Map (`Map`) for storing character frequencies with constant-time average lookups and insertion.

## Complexity

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n)` — we traverse both strings once.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Map` can store up to `n` characters.

> “The time complexity is O(n), or in order of n, because we traverse both strings once. The space complexity is O(n), because we store the character frequencies in a Map.”
