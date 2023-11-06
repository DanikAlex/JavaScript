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

function displayArrayMax(){
    const arr = [2, 4, 6, 8, 10, 12];
    const max = recursiveArrayMax(arr, 0, 5);
    console.log(max);
}

function recursiveArrayMax(arr, startIndex, endIndex){
    if (startIndex === endIndex) return arr[startIndex];
    const max = recursiveArrayMax(arr, startIndex + 1, endIndex);
    if (arr[startIndex] > max) {
        return arr[startIndex];
    }
    return max;
}

// function recursiveArrayMax2(arr, startIndex, endIndex){
//     if (startIndex === endIndex) return arr[startIndex];
//     return arr[startIndex] > arr[endIndex] ? recursiveArrayMax2(arr, startIndex, endIndex - 1) : recursiveArrayMax2(arr, startIndex - 1, endIndex);
// } 