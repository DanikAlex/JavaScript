const displayRandomNumber = async () => {
    try {
      const data = await getRandomNumber();
      console.log(data);
    } catch (e) {
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
  