class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  preOrder(){
    let storage = [];
    let _trace = (node)=>{
      storage.push(node.value);
      if (node.left) _trace(node.left);
      if (node.right) _trace(node.right);
    };
    _trace(this.root);
    return storage;
  }
  inOrder(){
    let storage = [];
    let _trace = (node) => {
      if(node.left) _trace(node.left);
      storage.push(node.value);
      if(node.right) _trace(node.right);
    };
    _trace(this.root);
    return storage;
  }
  postOrder(){
    let storage = [];
    let _trace = (node) => {
      if(node.left) _trace(node.left);
      if(node.right) _trace(node.right);
      storage.push(node.value);
    };
    _trace(this.root);
    return storage;
  }
}

module.exports = {BinaryTree,Node};
