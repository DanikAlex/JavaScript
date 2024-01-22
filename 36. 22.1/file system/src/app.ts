import fs from "fs";
import { promisify } from "util";
import fsPromises from 'fs/promises';

// sync
fs.writeFileSync("./data.txt", "hello file system");
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);

// never use f sync operations, unless:
// 1. this is an app initialization
// 2. this is a desktop application

// callbacks
fs.writeFile("./data2.txt", "hello async file system", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile("./data2.txt", "utf-8", (err, fileContents) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`data contents of file data2.txt: ${fileContents}`);
  });
});

// promises
const writeFilePromise = promisify(fs.writeFile);
const readFilePromise = promisify(fs.readFile);

(async () => {
  try {
    await writeFilePromise("./data3.txt", "hello from promisify func");
    const data = await readFilePromise("./data3.txt", "utf-8");
    console.log(`promisified data is ${data}`);
  } catch (err) {
    console.error(err);
  }
})();

// fsPromises
(async () => {
    try {
      await fsPromises.writeFile("./data4.txt", "hello from fsPromises");
      const data = await fsPromises.readFile("./data4.txt", "utf-8");
      console.log(`promisified data is ${data}`);
    } catch (err) {
      console.error(err);
    }
  })(); 

  (async () => {
    try {
      fsPromises.mkdir('./storage');
    } catch (err) {

    }

    let data = '';
    for (let i = 1; i < 1000; i++){
      if (i % 7 === 0){
        data += `${i},`;
      }
    }

    await fsPromises.writeFile('./storage/numbers', data);

    let numbersStr = await fsPromises.readFile('./storage/numbers', 'utf-8');

    let numbers = numbersStr.split(',').map(Number);

    console.log(numbers.length);

    console.log(numbers.slice(0, 10));
  })();