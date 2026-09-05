# Contains Duplicate

## Algorithm

1. Create a `Set` to keep track of values already seen.
2. Traverse the array one element at a time.
3. For each element, check if it already exists in the `Set`.
4. If it does, return `true`.
5. Otherwise, add the element to the `Set`.
6. If the loop finishes without finding a duplicate, return `false`.

## Data Structure

Hash Set (`Set`) for storing unique items with constant-time average lookups and insertion.

## Complexity

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n)` — each element is processed once.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Set` can store up to `n` items.

> “The time complexity is O(n), or in order of n, because we iterate through the array once. The space complexity is O(n), because we store the elements in a Set.”
