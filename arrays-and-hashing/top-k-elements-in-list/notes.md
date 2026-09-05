# Top K Frequent Elements

**Solution: Map + Frequency Sorting**

## Algorithm

1. Create a `Map` to store the frequency of each number.
2. Traverse `nums` and count how many times each number appears.
3. Convert the `Map` entries into an array of `[number, frequency]` pairs.
4. Sort the entries by frequency in descending order.
5. Take the first `k` numbers from the sorted entries.
6. Return the result.

## Data Structure

Hash Map (`Map`) for storing each number and its frequency.

Array of entries for sorting numbers by their frequency.

## Complexity

Let `n` be the size of `nums` and `m` the number of unique elements.

**Time complexity:** How the runtime grows as the input size `n` increases.

* `O(n + m log m)` — counting frequencies takes `O(n)`, and sorting the unique elements takes `O(m log m)`.

**Space complexity:** How the additional memory usage grows as the input size `n` increases.

* `O(n)` — the `Map`, entries array, and result can use up to `O(n)` additional space.
