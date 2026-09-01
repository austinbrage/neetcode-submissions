# Group Anagrams

## Algorithm

1. Create a `Map` where each key represents a group of anagrams.
2. Traverse each word in `strs`.
3. Create a common key for the current word:

   * a. Convert the word into an array of characters.
   * b. Sort the characters.
   * c. Join the characters back into a string.
4. If the key already exists, add the current word to its group.
5. Otherwise, create a new group with the current word.
6. Return all the groups stored in the `Map`.

## Data Structure

Hash Map (`Map`) for grouping words by their sorted character signature.

## Complexity

Let `n` be the number of strings and `k` the maximum length of a string.

**Time complexity:** How the runtime grows as the input size increases.

* `O(n · k log k)` — each word's characters are sorted.

**Space complexity:** How the additional memory usage grows as the input size increases.

* `O(n · k)` — the `Map` stores all the words grouped by their keys.
