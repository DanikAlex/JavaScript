function doSomething () {
    func1(function (){
        alert("Daniel");
    });
    cool(function (){
        alert(Math.random())
    });
    nice(function (x){
        alert(x);
    })
    amazing(function (a,b,c,d,e){
        const number = [a,b,c,d,e];
        const randomIndex = Math.floor(Math.random() * number.length);
        return number[randomIndex];
    })
    dope(function(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.background = bgColor; 
    })
    nice2(function (color){
        document.body.style.background = color;
    })
}

function func1 (callback){
    callback();
}

function cool(callback){
    callback();
}

function nice(callback){
    callback(42);
}

function amazing(callback){
    const num = callback(42, 128, 37, 81, 66);
    document.write("num:" + num);
}

function dope(paintCallback){
    paintCallback()
}

function nice2 (paintCallback){
    paintCallback("green");
}


