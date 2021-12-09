function DoubleLinkedList(){

	const Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}
	const length = 0;
	const head = null;
	const tail = null;

	this.append = function(element) {
		// this.element = element;
		// this.next = next;
		// this.prev = prev;

		const node = new Node(element), current;

		if(head == null) { // First node on list
			head = node;
			tail = node;
		}

		// attach to the tail node
		tail.next = node;
		node.prev = tail;
		tail = node;

		length++; // Updata size of the list


	}
	//call the insert function
	this.insert = function(position, element) {
		// check the out-of-bound limits
		if (position >= 0 && position <= length) {
			let node = new Node(element),
			current = head,
			prev,
			index = 0
		}

		if (position == 0) {
			if(!head) {
				head = node;
				tail = node;
			} else {
				node.next = current;
				current.prev = node;
				head = node;
			}
		} else if(position == length) {
			current = tail;
			current.next = node;
			current.prev = current;
			tail = node;
		}
	}
}