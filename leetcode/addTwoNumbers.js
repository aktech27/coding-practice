// Leetcode 2

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let ans = null;
    while (l1 || l2) {
        let n1 = 0, n2 = 0;
        if (l1 && l2) {
            n1 = l1.val;
            n2 = l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            n1 = l1.val;
            l1 = l1.next
        } else if (l2) {
            n2 = l2.val;
            l2 = l2.next
        }
        let s = (n1 + n2 + carry) % 10;
        carry = Math.floor((n1 + n2 + carry) / 10);
        if (ans === null) {
            ans = new ListNode(s);
        } else {
            let ptr = ans;
            while (ptr.next !== null) {
                ptr = ptr.next;
            }
            ptr.next = new ListNode(s);
        }
    }
    if (carry) {
        let ptr = ans;
        while (ptr.next !== null) {
            ptr = ptr.next;
        }
        ptr.next = new ListNode(carry);
    }
    return ans;
};
