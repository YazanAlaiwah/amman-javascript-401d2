const LL = require('../ll.js');
describe('Linked List', () => {
  it('constructor', () => {
    const list = new LL();
    expect(list.head).toBeNull();
  });
  it('append', () => {
    const ll = new LL();
    const initValue = 'First one';
    ll.append(initValue);
    expect(ll.head.value).toEqual(initValue);
    const newValue = 'new one';
    ll.append(newValue);
    expect(ll.head.value).toEqual(initValue);
    const final = 'last';
    expect(ll.head.next.value).toEqual(newValue);
    ll.append(final);
    console.table(ll);
  });
});
