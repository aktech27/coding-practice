class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    if (item) {
      this.items[this.front] = item;
      this.front++;
    }
  }

  dequeue() {
    if (this.front == this.rear) {
      return null;
    }
    const item = this.items[this.rear];
    this.rear++;
    return item;
  }

  size() {
    return this.front - this.rear;
  }

  isEmpty() {
    return this.front - this.rear == 0;
  }

  peek() {
    if (this.front == this.rear) {
      return null;
    }
    return this.items[this.rear];
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());


console.log(queue.peek());

queue.dequeue();
queue.dequeue();

console.log(queue.size());
queue.enqueue(60);
console.log(queue.size());

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());
console.log(queue.size());

console.log(queue.peek());
console.log(queue.dequeue());


queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(70);

console.log(queue.peek());
console.log(queue.size());









