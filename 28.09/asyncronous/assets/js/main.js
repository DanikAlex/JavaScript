const myFunc = () => {
  console.log("start");
  anotherFunc();
  console.log("finish");
};

const anotherFunc = () => {
  console.log("start2");
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    console.log(sum);
  }, 1000);
  console.log("finish2");
};
