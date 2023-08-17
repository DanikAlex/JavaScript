function checkLogin(){
    var userName=document.getElementById("userName").value;
    var userPass=document.getElementById("userPass").value;
    if (userName!="Daniel" && userPass!="12345") {
        document.getElementById("result").innerText="Try again";
    } else {
        document.getElementById("result").innerText="login successful";
    }
}

