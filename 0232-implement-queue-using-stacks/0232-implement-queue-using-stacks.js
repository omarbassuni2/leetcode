
var MyQueue = function() {
    this.pushing = [];
    this.popping = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushing.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Guaranteed to have a push before a pop
    if(!this.popping.length) {
        while(this.pushing.length) {
            this.popping.push(this.pushing.pop());
        }
    }
    return this.popping.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.popping.length) {
        while(this.pushing.length) {
            this.popping.push(this.pushing.pop());
        }
    }
    return this.popping[this.popping.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.popping.length && !this.pushing.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */