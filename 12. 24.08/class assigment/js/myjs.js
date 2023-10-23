const chooseMeal = () => {
    var mealChoise = document.getElementById("meal").value;
    var price = [];
    switch (mealChoise){
        case "vegetarian":
            document.getElementById("price").innerText="1000 shekels";
            break;
        case "vegan":
            document.getElementById("price").innerText="10 shekels";
            break;
        case "carnivore":
            document.getElementById("price").innerText="150 shekels";
            break;
        case "halavi":
            document.getElementById("price").innerText="50 shekels + ER visit";
            break;
    }
}