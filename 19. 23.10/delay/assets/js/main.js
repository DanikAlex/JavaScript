const answer =  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quidem eaque quaerat voluptatum nesciunt error, minima provident esse labore magni eveniet! In hic distinctio aut commodi suscipit, minus magnam natus."
const displayChatGPTAnswer = async () => {
    const words = answer.split(' ');
    console.log(words);

    // for (let i = 0; i < words.length; i++){
    //     document.getElementById('answer').innerHTML += `${words[i]} `;
    //     await delay(500);
    // }

    // for/of loop
    // in javascript, a string is an array of characters
        for (word of words){
            document.getElementById('answer').innerHTML += `${word} `;
            await delay(100);
        }
}

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}