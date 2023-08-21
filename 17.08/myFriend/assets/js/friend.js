function loadImage(){
    var imageUrl = document.getElementById("imageUrl").value;      //input
    var friendTel = document.getElementById("friendTel").value;    //input
    var friendName = document.getElementById("friendName").value;  //input

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