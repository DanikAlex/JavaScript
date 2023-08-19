function loadImage(){
    var img = document.getElementById("imageUrl").value;
    var friendName=document.getElementById("friendName").value;
    var friendTel=document.getElementById("friendTel").value;
    // document.getElementById("friendImage").src=img;
    var newRow = `
        <tr>
            <td><img src="${img}" width="50"></td>
            <td>${friendName}</td>
            <td>${friendTel}</td>
        </tr>    
    `;
    var friendList = document.getElementById("friendList");
    friendList.innerHTML += newRow;
}