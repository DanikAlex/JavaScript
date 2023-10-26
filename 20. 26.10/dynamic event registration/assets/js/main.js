const paintScreen = () => {
    document.body.style.backgroundColor = 'green';
}

document.getElementById('paintButton').addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red';
})

// const paintButton = document.getElementById('paintButton');
// paintButton.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'red';
// })