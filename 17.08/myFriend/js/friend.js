function loadImage(){
    var img = document.getElementById("imageUrl").value;
    var friendName=document.getElementById("friendName").value;
    var friendTel=document.getElementById("friendTel").value;
    // document.getElementById("friendImage").src=img;
        // added a new variable with the body of the table so i would have more than 1 row to merge
    var newRow = ` 
        <tr>
            <td><img src="${img}" width="50"></td>
            <td>${friendName}</td>
            <td>${friendTel}</td>
        </tr>    
    `;
    // added a new variable called friendList for the tbody id
    var friendList = document.getElementById("friendList");
    // merged the newRow variable into the friendList variable to extent the table each time for a countless amount of time
    friendList.innerHTML += newRow;
}