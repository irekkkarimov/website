

document.addEventListener("DOMContentLoaded", () => {
    let maxSize = 5;
    let test = new MyStack(maxSize);

    console.log(test.IsEmpty());

    for (let i = 0; i < maxSize; i++) {
        test.Push(Math.random(-100, 100));
        console.log("top - " + test.Count() - 1);
    }

    let temp = test.Count();
    for (let i = 0; i < temp; i++) {
        test.Pop();
        console.log("top - " + (test.Count() - 1));
    }
    console.log("stack length");
    console.log(test.Count());

    test.Push(10);
    test.Push(20);

    console.log("stack length");
    console.log(test.Count());
    test.Clear();
    console.log("stack length");
    console.log(test.Count());
    console.log("arg exception:");

    try {
        test.Pop();
    }
    catch (i) {
        console.log(i);
    }




});