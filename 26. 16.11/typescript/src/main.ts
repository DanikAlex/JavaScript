interface Alive {
    age: number;
    getHeartRate(): number;
}



function getAnimal(): Alive {
    return {
        age: 2,
        getHeartRate: () => 1
    }
}  
const animal = getAnimal();
console.log(animal.age);