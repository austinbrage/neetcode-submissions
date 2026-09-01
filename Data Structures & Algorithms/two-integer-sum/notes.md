# Two Sum

## Algorithm

1. Create a `Map` to store previously seen values and their indices.
2. Traverse the array and calculate the complement needed to reach the target.
3. If the complement is already in the `Map`, return its index and the current index.
4. Otherwise, store the current value and its index.
5. If no pair is found, return an empty array.

## Data Structure

Hash Map (`Map`) for storing values and their indices with constant-time average lookups and insertion.

## Complexity

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n)` — each element is processed once.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Map` can store up to `n` values.

> “The time complexity is O(n), or in order of n, because we traverse the array once. The space complexity is O(n), because we store the values and their indices in a Map.”
