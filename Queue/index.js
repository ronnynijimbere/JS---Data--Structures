import Queue from './queue.js'


const currencies = new Queue();

currencies.enqueue('Rand')
currencies.enqueue('Dollar')
currencies.enqueue('Euro')

console.log(currencies.dequeue());
console.log(currencies.peek());
console.log(currencies.getSize());
console.log(currencies.isEmpty());
