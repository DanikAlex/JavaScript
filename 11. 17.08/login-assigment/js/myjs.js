const uName="daniel";
const uPass="12345";

function checkLogin(){
    var userName=document.getElementById("userName").value;
    var userPass=document.getElementById("userPass").value;
    document.getElementById("result").innerHTML = userName!=uName && userPass!=uPass?"wrong identification":"login successful";
}

