const displayRandomNumberAfterDelay = () => {
  getRandomNumber(1000)
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log("finally"))
};

const getRandomNumber = (max) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const number = Math.random();
        if (number < 0.2) throw ("num lower than 0.5");
        resolve(number * max);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
