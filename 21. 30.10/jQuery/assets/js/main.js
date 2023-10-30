/// <reference path="jQuery-3.7.1.js" />

$(() => {
    // console.log(document.getElementById('p1').innerHTML);

    // const divs = $('div')
    // divs.fadeOut(2000);

    // $('#animationButton').click(() => {
    //     $('div').fadeOut(2000);
    // })

    $('#animationButton').on('click', () => $('div').fadeOut(2000))

    $('#toggleButton').on('click', () => $('.red').toggle(1000))

    $('#createButton').on('click', () => $('#container').append('<button>click me</button>'))

    // wont work
    // $('#container > button').on('click', () => console.log('new button clicked'))

    //will work
    $('#container').on('click', 'button', () => console.log('new button clicked'))

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`
    }

    $('#colorButton').on('click', () => {
        // const randomColor = getRandomColor();
        // $('div').css('background-color', randomColor);

        $('div').each(function() {
            const randomColor = getRandomColor();
            $(this).css('background-color', randomColor);
        })
    })

    
})