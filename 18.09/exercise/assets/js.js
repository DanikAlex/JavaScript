function doSomething() {
  func1(() => alert("hi"));
  func2(() => {
    alert("hi");
    return "hello";
  });
  func3(x => alert(x));
  func4((x, y) => alert(x + y));
  func5((x, y, z) => alert(x * y * z));
  func6(() => 42);
  func7((a, b) => a + b);
  func8((a, b) =>a > b ? a : b);
  func9((x, y, z) => {
    alert(x);
    alert(y);
    alert(z);
  });
  func10(() => ({name: "betty", age: 1.5, color: "gray"}));
}

function func1(callback) {
  callback();
}

function func2(callback) {
  console.log(callback());
}

function func3(callback) {
  callback(10);
}

function func4(callback) {
  callback(10, 20);
}

function func5(callback) {
  callback(10, 20, 30);
}

function func6(callback) {
  console.log(callback());
}

function func7(callback) {
  console.log(callback(10, 20));
}

function func8(callback) {
  console.log(callback(10, 20));
}

function func9(callback) {
  callback(10, 20, 30);
}

function func10(callback, name, age, color) {
  console.log(callback(name, age, color));
}

/*
==============================================================
*/

function doSomething2 () {
    func11(() => alert("hello"));
    func12((x ,y) => alert(x + y));
    func13((x ,y) => x > y ? x : y);
    func14(() => { return { name: "zurochi", price: "20" }; });
    func15(() => 30, () => 20);
}

function func11 (callback) {
    callback();
}

function func12 (callback) {
    callback(10, 20);
}

function func13 (callback) {
    const max = callback(100, 200);
    console.log(max);
}

function func14 (callback) {
    const product = callback();
    console.log(`product name is ${product.name} and product price is ${product.price}`);
}

function func15 (callback1, callback2) {
    const rabbitSpeed = callback1();
    const turtleSpeed = callback2();
    if (rabbitSpeed > turtleSpeed) {
        console.log('rabbit is faster')
    } else {
        console.log('turtle is faster')
    }
}
