

class MyStack{
    _stack;
    _counter = -1;

    constructor(maxSize) {
        this._stack = new Array(maxSize);
    }

    Push(value) {
        if (this._counter === (this._stack.length - 1)) throw new Error("The stack is full");
        this._stack[this._counter + 1] = value;
        this._counter++;
    }

    Pop() {
        if (this._counter === -1) throw new Error("The stack is empty");
        let res = this._stack[this._counter];
        this._counter--;
        return res;
    }

    IsEmpty() {
        return this._counter === -1;
    }

    Clear() {
        this._counter = -1;
    }

    Count() {
        return this._counter + 1;
    }

}