'use server';

import { db } from '@/db';
import { companies, problems, topics } from '@/db/schema';

export async function seedData() {
    try {
        // 1. Create Topics
        const topicsData = [
            { name: 'Arrays', slug: 'arrays', description: 'Array manipulation and iteration problems' },
            { name: 'Strings', slug: 'strings', description: 'String processing and pattern matching' },
            { name: 'Hash Tables', slug: 'hash-tables', description: 'HashMap and HashSet problems' },
            { name: 'Dynamic Programming', slug: 'dynamic-programming', description: 'DP and memoization techniques' },
            { name: 'Trees', slug: 'trees', description: 'Binary trees, BST, and tree traversals' },
            { name: 'Graphs', slug: 'graphs', description: 'Graph algorithms and traversals' },
            { name: 'Linked Lists', slug: 'linked-lists', description: 'Singly and doubly linked list problems' },
            { name: 'System Design', slug: 'system-design', description: 'Design scalable systems' },
        ];

        const createdTopics = await Promise.all(
            topicsData.map(t => db.insert(topics).values(t).onConflictDoNothing().returning())
        );

        // 2. Create Companies
        const companiesData = [
            {
                name: 'Google',
                slug: 'google',
                description: 'Leading search engine and tech innovator',
                logoUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
                industry: 'Technology'
            },
            {
                name: 'Amazon',
                slug: 'amazon',
                description: 'E-commerce and cloud computing leader',
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
                industry: 'Technology'
            },
            {
                name: 'Microsoft',
                slug: 'microsoft',
                description: 'Software and cloud services giant',
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                industry: 'Technology'
            },
            {
                name: 'Meta',
                slug: 'meta',
                description: 'Social media and technology conglomerate',
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
                industry: 'Technology'
            },
            {
                name: 'Apple',
                slug: 'apple',
                description: 'Consumer electronics and software innovator',
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
                industry: 'Technology'
            },
        ];

        const createdCompanies = await Promise.all(
            companiesData.map(c => db.insert(companies).values(c).onConflictDoNothing().returning())
        );

        // Get IDs (some might be empty if already existed)
        const [arrays, strings, hashTables, dp, trees, graphs, linkedLists, systemDesign] = createdTopics.map(t => t[0]);
        const [google, amazon, microsoft, meta, apple] = createdCompanies.map(c => c[0]);

        // 3. Create Problems - Comprehensive set
        const problemsData = [
            // Google - Easy
            {
                title: 'Two Sum',
                slug: 'two-sum',
                description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
                difficulty: 'easy' as const,
                topicId: arrays?.id || '',
                companyId: google?.id || '',
                constraints: `2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.`,
                hints: 'Think about using a hash map to store values you have seen.'
            },
            {
                title: 'Valid Parentheses',
                slug: 'valid-parentheses',
                description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example:
Input: s = "()[]{}"
Output: true`,
                difficulty: 'easy' as const,
                topicId: strings?.id || '',
                companyId: google?.id || '',
                constraints: `1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.`,
                hints: 'Use a stack data structure to keep track of opening brackets.'
            },

            // Google - Medium
            {
                title: 'LRU Cache',
                slug: 'lru-cache',
                description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
                difficulty: 'medium' as const,
                topicId: hashTables?.id || '',
                companyId: google?.id || '',
                constraints: `1 <= capacity <= 3000
0 <= key <= 10^4
0 <= value <= 10^5
At most 2 * 10^5 calls will be made to get and put.`,
                hints: 'Consider using a combination of HashMap and Doubly Linked List.'
            },
            {
                title: 'Longest Substring Without Repeating Characters',
                slug: 'longest-substring-without-repeating',
                description: `Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.`,
                difficulty: 'medium' as const,
                topicId: strings?.id || '',
                companyId: google?.id || '',
                constraints: `0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.`,
                hints: 'Use sliding window technique with a hash set.'
            },

            // Amazon - Easy
            {
                title: 'Best Time to Buy and Sell Stock',
                slug: 'best-time-to-buy-sell-stock',
                description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.`,
                difficulty: 'easy' as const,
                topicId: arrays?.id || '',
                companyId: amazon?.id || '',
                constraints: `1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4`,
                hints: 'Keep track of minimum price seen so far and maximum profit.'
            },

            // Amazon - Medium
            {
                title: 'Number of Islands',
                slug: 'number-of-islands',
                description: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1`,
                difficulty: 'medium' as const,
                topicId: graphs?.id || '',
                companyId: amazon?.id || '',
                constraints: `m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.`,
                hints: 'Use DFS or BFS to traverse connected components.'
            },
            {
                title: 'Merge Two Sorted Lists',
                slug: 'merge-two-sorted-lists',
                description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
                difficulty: 'easy' as const,
                topicId: linkedLists?.id || '',
                companyId: amazon?.id || '',
                constraints: `The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.`,
                hints: 'Use a dummy node to simplify edge cases.'
            },

            // Microsoft - Easy
            {
                title: 'Reverse Linked List',
                slug: 'reverse-linked-list',
                description: `Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]`,
                difficulty: 'easy' as const,
                topicId: linkedLists?.id || '',
                companyId: microsoft?.id || '',
                constraints: `The number of nodes in the list is in the range [0, 5000].
-5000 <= Node.val <= 5000`,
                hints: 'Use three pointers: prev, current, and next.'
            },

            // Microsoft - Medium
            {
                title: 'Validate Binary Search Tree',
                slug: 'validate-bst',
                description: `Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.`,
                difficulty: 'medium' as const,
                topicId: trees?.id || '',
                companyId: microsoft?.id || '',
                constraints: `The number of nodes in the tree is in the range [1, 10^4].
-2^31 <= Node.val <= 2^31 - 1`,
                hints: 'Use inorder traversal and check if values are in ascending order.'
            },

            // Meta - Medium
            {
                title: 'Clone Graph',
                slug: 'clone-graph',
                description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.`,
                difficulty: 'medium' as const,
                topicId: graphs?.id || '',
                companyId: meta?.id || '',
                constraints: `The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.`,
                hints: 'Use a hash map to store the mapping from original nodes to cloned nodes.'
            },

            // Apple - Medium
            {
                title: 'Product of Array Except Self',
                slug: 'product-of-array-except-self',
                description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.`,
                difficulty: 'medium' as const,
                topicId: arrays?.id || '',
                companyId: apple?.id || '',
                constraints: `2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.`,
                hints: 'Build result array with left products, then multiply with right products in second pass.'
            },

            // Additional Hard Problems
            {
                title: 'Trapping Rain Water',
                slug: 'trapping-rain-water',
                description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.`,
                difficulty: 'hard' as const,
                topicId: arrays?.id || '',
                companyId: google?.id || '',
                constraints: `n == height.length
1 <= n <= 2 * 10^4
0 <= height[i] <= 10^5`,
                hints: 'Use two pointers or dynamic programming to track max heights from left and right.'
            },
        ];

        // Insert problems in batches
        const validProblems = problemsData.filter(p => p.topicId && p.companyId);
        if (validProblems.length > 0) {
            await db.insert(problems).values(validProblems).onConflictDoNothing();
        }

        console.log(`✅ Seeded ${validProblems.length} problems successfully!`);
        return { success: true, count: validProblems.length };
    } catch (error) {
        console.error('❌ Seeding error:', error);
        return { success: false, error: String(error) };
    }
}
