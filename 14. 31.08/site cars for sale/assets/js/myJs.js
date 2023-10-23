var input = [];

window.onload=()=>{
    input = loadData();
    createTable();
}

const addItem=()=>{
    var carManu = document.getElementById("carManu").value;
    var carModel = document.getElementById("carModel").value;
    var year = document.getElementById("year").value;
    var urlData = document.getElementById("imageURL").value;
    var previousOwner = document.getElementById("previous").selected;
    var sunRoof = document.getElementById("sunRoof").selected;
    var price = document.getElementById("price").value;

    var data = new Object();
    data.carManu = carManu;
    data.carModel = carModel;
    data.year = year;
    data.urlData = urlData;
    data.previousOwner = previousOwner;
    data.sunRoof = sunRoof;
    data.price = price;

    input.push(data);

    createTable();



    document.getElementById("table").reset();

    loadData();
}

const createTable = () =>{
    var data=document.getElementById("data");
    var info="";
    for (var index=0;index<input.length;index++){
        info +=`
        <tr>
            <td>${input[index].carManu}</td>
            <td>${input[index].carModel}</td>
            <td>${input[index].year}</td>
            <td>${input[index].previousOwner}</td>
            <td>${input[index].sunRoof}</td>
            <td>${input[index].price}</td>
            <td><img src="${input[index].urlData}">
            <img src="${input[index].urlData}">
            <img src="${input[index].urlData}"></td>
            <td><button onclick="removeItem(${index})">הסרה</button></td> 
            </tr>    
        `;
    }

    data.innerHTML=info;

    saveData();
}

const saveData=(myData)=>{
    var myData=[];
    var userInput= document.getElementById("table");
    var newData=loadData();
    newData.push(userInput);
    localStorage.setItem("Data",JSON.stringify(input));
}

const loadData=(myData)=>{
    myData = JSON.parse(localStorage.getItem("Data")) || [];
    return myData;
}

const removeItem=(index)=>{
    input.splice(index, 1);
    createTable();
    saveData();
}