/**
 * Initialize your data structure here.
 */
/**
 * @constructor
 */
var MyStack = function() {
    this.queue = new Queue();
};

/**
 * @param {number}
 * @returns {void}
 */
MyStack.prototype.push = function(x) {
    var nextQueue = new Queue();
    nextQueue.enqueue(x);
    nextQueue.enqueue(this.queue);
    this.queue = nextQueue;
};

/**
 * @returns {void}
 */
MyStack.prototype.pop = function() {
    var x = this.queue.dequeue();
    this.queue = this.queue.dequeue();
    return x;
};

/**
 * @returns {number}
 */
MyStack.prototype.top = function() {
    return this.queue.top();
};

/**
 * @returns {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length() === 0;
};


// Wrapper class for Queue. Uses simple list operations
var Queue = function() {
    this.lst = [];
}

Queue.prototype.enqueue = function(x) {
    this.lst.push(x);
}

Queue.prototype.dequeue = function() {
    return this.lst.shift();
}

Queue.prototype.length = function() {
    return this.lst.length;
}

Queue.prototype.top = function() {
    return this.lst[0];
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */