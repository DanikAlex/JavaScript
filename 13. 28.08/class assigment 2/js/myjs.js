var girls = ["Svetlana","Yulia","Or","Braha","shimrit"];

var init=()=>{
    showList();
    
    setInterval(()=>{
        initVictim();
        showVictim();
    },1000)
}

var showList=()=>{
    var myList = document.querySelector("#girls");
    var myOL= document.createElement("ol");
    for (var counter=0;counter<girls.length;counter++){
        var singleGirls = document.createElement("li");
        singleGirls.textContent = girls[counter];
        myOL.appendChild(singleGirls);
    }
    myList.appendChild(myOL);
}

var showVictim=()=>{
    var victim=document.querySelector("#victim");
    var hr=document.createElement(`hr`);
    var h1=document.createElement(`h1`);
    h1.textContent = girls[randomGirl(girls.length)];
    victim.appendChild(hr);
    victim.appendChild(h1);
}

var randomGirl=(max)=>{
    return Math.floor(Math.random()*max);
}

// var initVictim = () =>{
//     var victim=document.querySelector("#victim");
//     victim.innerHTML=""
// }

var initVictim = () =>{
    var victim=document.querySelector("#victim");
    var first=victim.firstElementChild;
    while (first){
        first.remove();
        first = victim.firstElementChild;
    }
}