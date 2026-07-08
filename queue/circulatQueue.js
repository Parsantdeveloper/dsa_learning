class MyCircularQueue {
    constructor(k) {
        this.q = new Array(k);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.capacity = k;
    }

    enQueue(value) {
        if (this.isFull()) return false;

        this.q[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) return false;

        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.q[this.front];
    }

    Rear() {
        return this.isEmpty() 
            ? -1 
            : this.q[(this.rear - 1 + this.capacity) % this.capacity];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}