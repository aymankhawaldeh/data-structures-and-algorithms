
function FizzBuzzTree (tree){
  let _walk = (node)=>{
    if(node.value){
      if(node.value % 3 === 0 && node.value % 5 === 0) node.value = 'FizzBuzz';
      else if(node.value % 5 === 0) node.value = 'Buzz';
      else if(node.value % 3 === 0) node.value = 'Fizz';
      else node.value = `${node.value}`;
    }
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  _walk(tree.root);
  return tree;
}

module.exports = FizzBuzzTree;
