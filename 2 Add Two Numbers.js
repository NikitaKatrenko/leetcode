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
var addTwoNumbers = function(l1, l2) {
    let digit = 0;
    let res = l1;

    while (l1 || l2) {
        let node = l1 || l2;
        let curr = l1.val + l2.val + digit;

        if (curr < 10) {
            node.val = curr;
        } else if (curr >= 10 && !node.next) {
            node.val = +curr.toString().slice(-1);
            node.next = {val: -1, next: null};
            node.next.val = +curr.toString().slice(0,1);
        } else {
            node.val = +curr.toString().slice(-1);
            digit = +curr.toString().slice(0,1);
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    return res;
};