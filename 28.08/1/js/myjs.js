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
// var documentLoaded = ()=>{
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
    // menu.appendChild(makeHr(myList));
    // menu.appendChild(addName(name[counter]));
    // menu.appendChild(makeHr(myList));
    for (var counter=0;counter<myList.length;counter++){
        menu.appendChild(makeItem(myList[counter]));
    }   
    menu.appendChild(makeHR(menu.firstChild.textContent));
}

var makeItem = (menuItem) =>{
    var li = document.createElement(`li`);
    li.textContent= menuItem;
    return li;
}

var makeHR = (userName) =>{
    var myDiv = document.createElement(`div`);
    var myHR = document.createElement(`hr`);
    var myName = document.createElement(`h1`);
    myName.textContent = userName;
    myDiv.appendChild(myHR);
    myDiv.appendChild(myName);
    //myDiv.appendChild(myHR);
    return myDiv;
}

// var makeHr = (userName) =>{
//     var hr = document.createElement(`hr`);
//     return hr;
// }   

// var addName = (name) =>{
//     var h1 = document.createElement(`h1`);
//     h1.textContent= name;
//     return span;
// }

// var addTitle = () =>{
//     var name = "daniel";
//     var hr = document.createElement(`hr`);
//     var span = document.createElement(`span`);
//     span.textContent=name;
//     return (hr,span,hr);
// }