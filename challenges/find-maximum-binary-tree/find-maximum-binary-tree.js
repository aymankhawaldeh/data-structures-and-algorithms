class Node {
  constructor(val, right = null, left = null){
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeMaxValue {
  constructor(root = null){
    this.root = root;
  }

  findMaximumValue(){
    let storage = [];
    let _tracing = (node)=>{
      storage.push(node.val);
      if (node.left) _tracing(node.left);
      if (node.right) _tracing(node.right);
    };
    _tracing(this.root);
    let maximum = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i] > maximum) maximum = storage[i];
    }

    return maximum;
  }
}
module.exports = {BinaryTreeMaxValue,Node};
