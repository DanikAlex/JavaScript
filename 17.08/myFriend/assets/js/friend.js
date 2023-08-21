var imageUrl = [];
var friendTel = [];
var friendName = [];

function loadImage(){
    var urlData = document.getElementById("imageUrl").value;      //input
    var telData = document.getElementById("friendTel").value;    //input
    var nameData = document.getElementById("friendName").value;  //input

    var data = document.getElementById("data");                    //output

    //backtick => ` ~=>tilda

    data.innerHTML=`
        <tr>
            <td>${imageUrl}</td>
            <td>${friendName}</td>
            <td>${friendTel}</td>
        </tr>
    `;
}