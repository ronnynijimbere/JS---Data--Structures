class Queue {
	constructor() {
		this.items = [];
	}

	// adding item to the queue
	enqueue(item) {
		this.items.push(item)
	}

	// remove item from the queue
	dequeue() {
		return this.items.shift()
	}

	// return first item without removing item from the list
	peek() {
		return this.items[0];
	}

	getSize() {
		return this.items.length;
	}

	isEmpty() {
		return this.getSize() === 0;
	}
}