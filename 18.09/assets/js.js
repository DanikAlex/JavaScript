function runUserCode() {
    const code = prompt("enter some javascript code");
    console.log(code);
    try {
        eval(code);
    } catch (err) {
        console.log(err.message);
    }
}