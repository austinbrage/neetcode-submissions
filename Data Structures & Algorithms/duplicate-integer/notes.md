# Contains Duplicate

## Algorithm

Traverse the array and keep track of previously encountered values. Return `true` as soon as a repeated value is found.

## Data Structure

Hash Set (`Set`) for storing unique items with constant-time average lookups and insertion.

## Complexity

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n)` — each element is processed once.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Set` can store up to `n` items.

> “The time complexity is O(n) or in order of n, because we iterate through the array once. The space complexity is O(n), because we store the elements in a Set.”
