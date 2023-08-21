var friendList=[];

function loadImage(){
    var urlData = document.getElementById("imageUrl").value;      //input
    var telData = document.getElementById("friendTel").value;    //input
    var nameData = document.getElementById("friendName").value;  //input

    var data = new Object();
    data.urlData = urlData;
    data.telData = telData;
    data.nameData = nameData;

    friendList.push(data);

    createTable();

    document.getElementById("friendForm").reset();  
}

function createTable(){
    var data = document.getElementById("data");                    //output

    //backtick => `, ~=>tilda

    var info= "";

    for (var index=0;index<friendList.length;index++){
        info += `
        <tr>
            <td><img src="${friendList[index].urlData}"></td>
            <td>${friendList[index].nameData}</td>
            <td>${friendList[index].telData}</td>
        </tr>
        `;
    }

    data.innerHTML=info;
}

function clearTable(){
    document.getElementById("data").innerHTML="";
    friendList = [];
}

function removeLast(){
    friendList.pop();
    createTable();
}