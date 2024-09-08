class LNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.val = null;
    this.next = null;
    this.length = 0;
  }

  prepend(data) {
    let newNode = new LNode(data);
    // Head is empty, so newNode will be the head
    if (this.head == null) {
      this.head = newNode;
      this.val = newNode.data;
      this.next = newNode.next;
    } else {
      // Point head to newNode and make newNode as head
      newNode.next = this.head;
      this.head = newNode;
      this.val = this.head.data;
      this.next = this.head.next;
    }
    this.length = this.length + 1;
  }

  add(data) {
    let newNode = new LNode(data);
    // Head is empty, so newNode will be the head
    if (this.head == null) {
      this.head = newNode;
      this.val = newNode.data;
      this.next = newNode.next;
    } else {
      // Point last node to newNode
      let ptr = this.head;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = newNode;
      this.next = this.head.next;
    }
    this.length = this.length + 1;
  }

  pop() {
    if (this.head === null) {
      return;
    }
    // Move head to next node, deleting the first node
    let t = this.head.data;
    this.head = this.head.next;
    this.val = this.head.data;
    this.next = this.head.next;
    this.length = this.length - 1;
    return t;
  }

  remove() {
    if (this.head === null) {
      return;
    }
    let ptr = this.head;
    while (ptr.next.next !== null) {
      ptr = ptr.next;
    }
    let t = ptr.next.data;
    ptr.next = null;
    this.length = this.length - 1;
    return t;
  }

  find(value) {
    let ptr = this.head;
    while (ptr.next) {
      if (ptr.data === value) {
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  }

  print() {
    let ptr = this.head;
    let out = '';
    if (this.head === null) {
      console.log(null);
      return;
    }
    while (ptr.next) {
      out += `${ptr.data}-->`;
      ptr = ptr.next;
    }
    out += `${ptr.data}`;
    console.log(out);
  }

  createFromArray(arr) {
    if (!arr.length) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.print();

console.log(linkedList.val);
console.log(linkedList.length);

console.log(linkedList.head);
console.log(linkedList.next);

console.log(linkedList.find(10));
console.log(linkedList.find(15));

linkedList.pop();
linkedList.print();
console.log(linkedList.val);
console.log(linkedList.length);

linkedList.remove();
linkedList.print();
console.log(linkedList.val);
console.log(linkedList.length);

const linkedList2 = new LinkedList();
linkedList2.createFromArray([5, 10, 15, 20, 25]);

linkedList2.print();
console.log(linkedList2.length);

