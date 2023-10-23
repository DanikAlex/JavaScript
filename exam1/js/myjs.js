var input = [];

const addItem = () => {
    var productName = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var productCategory = document.getElementById("category").value;
    var urlData = document.getElementById("imageURL").value;

    var data = new Object();
    data.productName = productName;
    data.price = price;
    data.productCategory = productCategory;
    data.urlData = urlData;

    input.push(data);

    createTable();

    document.getElementById("groceryList").reset();
}

const createTable = () => {
    var tableBody = document.getElementById("tableBody");
    var info = "";
    for (var index=0;index<input.length;index++){
        info += `
        <tr>
            <td>${input[index].productName}</td>
            <td>${input[index].price} Shekels</td>
            <td>${input[index].productCategory}</td>
            <td><img src="${input[index].urlData}"></td>
            <td><input type="button" value="Delete" onclick="removeItem(${index})">
        </tr>
        `
    }

    tableBody.innerHTML = info;
}

const removeItem = (index) => {
    input.splice(index, 1);
    createTable();
}