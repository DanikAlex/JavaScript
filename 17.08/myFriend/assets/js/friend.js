var imageUrl = [];
var friendTel = [];
var friendName = [];

function loadImage(){
    var urlData = document.getElementById("imageUrl").value;      //input
    var telData = document.getElementById("friendTel").value;    //input
    var nameData = document.getElementById("friendName").value;  //input

    imageUrl.push(urlData);     //add data to array
    friendTel.push(telData);    //add telephone to array
    friendName.push(nameData);  //add name to array

    createTable();

    document.getElementById("friendForm").reset();  
 

}

function createTable(){
    var data = document.getElementById("data");                    //output

    //backtick => `, ~=>tilda

    var info= "";

    for (var index=0;index<imageUrl.length;index++){
        info += `
        <tr>
            <td><img src="${imageUrl[index]}"></td>
            <td>${friendName[index]}</td>
            <td>${friendTel[index]}</td>
        </tr>
        `;
    }

    data.innerHTML=info;
}

function clearTable(){
    document.getElementById("data").innerHTML="";
    imageUrl = [];
    friendTel = [];
    friendName = [];
}

function removeLast(){
    imageUrl.pop();
    friendTel.pop();
    friendName.pop();
    createTable();
}