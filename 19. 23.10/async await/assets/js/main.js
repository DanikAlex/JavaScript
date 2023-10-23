const displayRandomNumber = async () => {
  try {
    const data = await getRandomNumber(1000);
    console.log(data);
    const data2 = await getRandomNumber(data);
    console.log(data2);
    const data3 = await getRandomNumber(data2);
    console.log(data3);
    const data4 = await getRandomNumber(data3);
    console.log(data4);    
  } catch (e) {
    console.log('exception!')
    console.error(e);
  }
};

const getRandomNumber = (max) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const number = Math.random();
        // if (number < 0.5) throw ("num lower than 0.5");
        resolve(number * max);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
