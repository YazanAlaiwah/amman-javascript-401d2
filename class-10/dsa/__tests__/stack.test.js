'use strict';

const Stack = require('../stack.js');

describe('Stack', () => {
  it('creates an instance', () => {
    const stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

  describe('peek()', () => {
    it('returns null on empty stack', () => {
      const stack = new Stack();
      expect(stack.peek()).toBeNull();
    });
    it('returns the last item', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('does not alter the stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });
    it('points to the new head after pop()', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(1);
      stack.push(4);
      stack.push(6);
      stack.pop();
      expect(stack.peek()).toEqual(4);
      stack.pop();
      expect(stack.peek()).toEqual(1);
    });
  });
  describe('push()', () => {
    it('adds a value to the top of the stack', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.top).toEqual(1);
      stack.push(2);
      expect(stack.top).toEqual(2);
    });
  });
  describe('pop()', () => {
    it('returns and remove the top item', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.top).toEqual(null);
    });
  });
});
