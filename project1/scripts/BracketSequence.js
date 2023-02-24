

class BracketSequence{
    _stack = new MyStack();
    _indexes = [];
    _index = -1;
    _current = -1;
    _ifSequenceCorrect = true;

    _brackets = {
        '(' : ')',
        '<' : '>',
        '[' : ']',
        '{' : '}'
    }


    get IfSequenceCorrect(){
        return this._ifSequenceCorrect;
    }

    set IfSequenceCorrect(value){
        this._ifSequenceCorrect = value;
    }

    PrintIndexes() {
        if (this.IfSequenceCorrect) {
            for (let i = 0; i < this._indexes.length; i++) {
                console.log(this._indexes[i][0] + " : " + this._indexes[i][1]);
            }
        }
        else {
            console.log("Неправильная скобочная запись");
        }

        this._stack.Clear();
        this._indexes = [];
        this._index = -1; this._current = -1;
        this.IfSequenceCorrect = true;
    }

    BracketSequenceChecker(sequence) {
        this._stack = new MyStack(sequence.length);

        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] in this._brackets) {
                this._stack.Push(sequence[i]);
                this._index++;
                this._current++;
            }
            else {
                this._current++;
                if (sequence[i] in Object.values(this._brackets) && this._stack.Count() > 0 && this._brackets[this._stack.Pop()] === i) {
                    this._indexes.push([this._index, this._current]);
                    this._index--;
                }
                else {
                    this.IfSequenceCorrect = false;
                    break;
                }
            }
        }
        if (this._stack.Count() === 0 && this._indexes.length > 0) {
            this.PrintIndexes();
        }
        else {
            this.IfSequenceCorrect = false;
            this.PrintIndexes();
        }

    }

}