var shopList=[];

function addItem(){
    var urlData = document.getElementById("imageURL").value;
    var itemData = document.getElementById("shopItem").value;
    var amountData = document.getElementById("itemAmount").value;

    var data = new Object();
    data.urlData = urlData;
    data.itemData = itemData;
    data.amountData = amountData;

    shopList.push(data);

    createTable();

    document.getElementById("shopTable").reset();
}

function createTable(){
    var data = document.getElementById("date");

    var info = "";

    for (var index=0;index<shopList.length;index++){
        info += `
        <tr>
            <td><img src="${shopList[index].urlData}"></td>
            <td>${shopList[index].itemData}</td>
            <td>${shopList[index].amountData}</td>
        </tr>    
        `;
    }

    data.innerHTML=info;
}

function clearTable(){
    document.getElementById("data").innerHTML="";
    shopList = [];
}

function removeLast(){
    shopList.pop();
    createTable();
}