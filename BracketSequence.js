

class BracketsSequence{
    _stack;
    _indexes;
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




}