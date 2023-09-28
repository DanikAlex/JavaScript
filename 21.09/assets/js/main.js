// const displayTime = () => {
//     setInterval(() => {
//         const time = new Date();
//         document.getElementById("clock").innerText = time.toLocaleTimeString()
//     }, 1000);
// }

const grades = [66, 78, 80, 81, 88, 90, 93, 96, 100];

let result = grades.filter(grade => grade > 90);
let result2 = result.map(grade => grade ** 2);
let final = result2.reduce((accumulator, grade) => `${accumulator} | ${grade}`, '');
console.log(final);

final = grades.filter(grade => grade > 90).map(grade => grade ** 2).reduce((accumulator, grade) => `${accumulator} | ${grade}`, '');
console.log(final);