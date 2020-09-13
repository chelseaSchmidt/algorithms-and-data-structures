/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

Definition for singly-linked list.
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
*/

const mergeTwoLists = (l1, l2) => {
  let newHead = null;
  let newLastNode = null;
  let currentNode1 = l1;
  let currentNode2 = l2;

  // handle one or both input lists being empty
  if (currentNode1 === null && currentNode2 === null) {
    return null;
  }
  if (currentNode1 === null || currentNode2 === null) {
    return currentNode1 || currentNode2;
  }
  // handle head
  if (currentNode1.val <= currentNode2.val) {
    newHead = { ...currentNode1 };
    currentNode1 = l1.next;
  } else {
    newHead = { ...currentNode2 };
    currentNode2 = l2.next;
  }
  newLastNode = newHead;
  // handle subsequent nodes
  while (currentNode1 !== null && currentNode2 !== null) {
    if (currentNode1.val <= currentNode2.val) {
      newLastNode.next = { ...currentNode1 };
      currentNode1 = currentNode1.next;
    } else {
      newLastNode.next = { ...currentNode2 };
      currentNode2 = currentNode2.next;
    }
    newLastNode = newLastNode.next;
  }
  // handle lists of different lengths
  if (currentNode1 === null && currentNode2 !== null) {
    newLastNode.next = currentNode2;
  }
  if (currentNode1 !== null && currentNode2 === null) {
    newLastNode.next = currentNode1;
  }
  return newHead;
};
