// Leetcode 3217

/*
You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    const hashMap = {};
    let ptr = head;
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = true;
        }
    }
    while (ptr.next !== null) {
        if (hashMap[head.val]) {
            head = head.next;
            ptr = head;
        } else if (hashMap[ptr.next.val]) {
            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next;
        }
    }
    return head;
};

console.log(modifiedList([1,2,3],[1,2,3,4,5]));
console.log(modifiedList([1],[1,2,1,2,1,2]));
console.log(modifiedList([5],[1,2,3,4]));
console.log(modifiedList([5],[1,2,3,4,5]));
