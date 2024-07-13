class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return (this.items.length === 0);
    }

    enqueue(item) { //push
        this.items.unshift(item);
    }

    dequeue() { //pop
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
}

export default Queue;