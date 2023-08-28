var myList = ["milk", "eggs", "bread", "salt", "paper", "chocolate", "cheese", "apple"];

//method 1
// var myListHTML = document.getElementById("myList");
// myListHTML.innerHTML = `
//     <li>${myList[0]}</li>
//     <li>${myList[1]}</li>
//     <li>${myList[2]}</li>
//     <li>${myList[3]}</li>
//     <li>${myList[4]}</li>
//     <li>${myList[5]}</li>
// `;

//method 2
// var result= "";
// for (var counter=0;counter<myList.length;counter++){
//     result += `<li>${myList[counter]}</li>`;
// }
// myListHTML.innerHTML = result;

//method 3
// function documentLoaded(){
//     var myListHTML = document.getElementById("myList");
//     makeList(myListHTML);
// }

// function makeList(myListHTML){
//     var result = "";
//     for (var counter=0;counter<myList.length;counter++){
//         result += `<li>${myList[counter]}</li>`;
//     }
//     myListHTML.innerHTML = result;
// };

//method 4
// var documnetLoaded = ()=>{
//     makeList();
// }

// var makeList = ()=>{
//     var myListHTML = document.getElementById("myList");
//     var result = "";
//     for (var counter=0;counter<myList.length;counter++){
//         result += `<li>${myList[counter]}</li>`;
//     }
//     myListHTML.innerHTML = result;
// };

//method 5
var documentLoaded = () =>{
    makeList();
}

var makeList = () =>{
    const menu = document.querySelector("#menu");
    for (var counter=0;counter<myList.length;counter++){
        menu.appendChild(makeItem(myList[counter]));
    }
    
}

var makeItem = (menuItem) =>{
    var li = document.createElement(`li`);
    li.textContent= menuItem;
    return li;
}