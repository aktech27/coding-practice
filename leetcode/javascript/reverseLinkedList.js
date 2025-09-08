// Leetcode 208

/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let ans = null;
    if (!head) {
        return head;
    }
    while (head) {
        ans = new ListNode(head.val,ans)
        head = head.next;
    }
    return ans;
};

console.log(reverseList([1,2,3,4,5]));
console.log(reverseList([1,2]));
console.log(reverseList([]));
console.log(reverseList([1]));
