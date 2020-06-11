const BinaryTree = require('../index.js');
const Node = require('../node/index.js');
describe('Binary Tree', () => {
  let tree;
  // Node => value,left,right
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    three.right = four;
    three.left = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BinaryTree(one);
  });
  it('pre', () => {
    const expected = [1, 2, 6, 7, 8, 9, 3, 5, 4];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('postOrder', () => {
    const expected = [8, 9, 7, 6, 2, 5, 4, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });
  it('inOrder', () => {
    const expected = [6, 8, 7, 9, 2, 1, 5, 3, 4];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
});
