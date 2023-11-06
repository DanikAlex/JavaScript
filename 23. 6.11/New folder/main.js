function recursive1(n){
    if (n <= 0) return;

    document.write(`${n} `);
    recursive1(n - 1);
}

function recursive2(n){
    if(n <= 0) return;
    if(n%2==0){
        document.write(`${n} `);
    }
    recursive2(n - 1);
}

function recursive3(n){
    if(n <= 0) return;
    document.write(`${Math.floor(Math.random() * 100)} `);
    recursive3(n - 1);
}

function recursive4(n){
    if (n <= 0) return;
    recursive4(n-1);
    document.write(`${n} `);
}

function recursive5(n){
    document.write(factorial(5));
}

function factorial(n){
    if (n <= 0) return 1;
    return n * factorial(n-1);
}