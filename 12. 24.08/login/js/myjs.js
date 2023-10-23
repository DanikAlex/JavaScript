var userData = new Object();

const makeLogin=()=>{
    var uName=document.getElementById("uName").value;
    var uPass=document.getElementById("uPass").value;
    var saveMe = document.getElementById("saveMe").checked;
    
    saveData(uName,uPass,saveMe);
}

const saveData=(uName,uPass,saveMe)=>{
    console.log(uName,uPass,saveMe);
   
    userData.uName = uName;
    userData.uPass = uPass;
    //userData.saveMe = saveMe?1:0;
    userData.saveMe = saveMe;

    //save to local storage
    //JSON.stringify => convert object to string
    localStorage.setItem("user",JSON.stringify(userData));
}

const loadData=()=>{
    userData = JSON.parse(localStorage.getItem("user"));    
    console.log("type of userData.saveMe",typeof userData.saveMe);
    userData.saveMe=userData.saveMe==1;
    console.log(userData);
}

loadData();

function saveData_db(uName,uPass,saveMe){

}