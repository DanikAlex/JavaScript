const displayRandomNumberAfterDelay = () => {
  getRandomNumber()
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(console.log("finally"));
};

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const number = Math.random();
        if (number < 0.5) throw "num lower than 0.5";
        resolve(number);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
