const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Stack {
  constructor(st) {
    this.st = [];
  }
  push(element) {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    this.st.push(element)
    return this;
  }

  pop() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    
    return this.st.pop();
  }

  peek() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    return this.st[this.st.length -1];
  }
}

module.exports = {
  Stack
};