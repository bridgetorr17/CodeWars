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
    const lNum1 = reverseNumsToArray(l1);
    const lNum2 = reverseNumsToArray(l2);
    
    const sum = (parseInt(lNum1) + parseInt(lNum2))
                .toString()
                .split('');

    console.log(sum)

    let sumList = new ListNode(parseInt(sum[sum.length-1]))
    let current = sumList;
    for(let i=sum.length-2; i>-1; i--){
        current.next = new ListNode(parseInt(sum[i]))
        current = current.next;
    }

    return sumList
};

function reverseNumsToArray(l){
    let reverseArray = [];

    if (l.next !== null){
        reverseArray = reverseArray.concat(
            reverseNumsToArray(l.next));
    }

    reverseArray.push(l.val);

    return reverseArray.join('');
}