
let names = {
    fname: "Dillion",
    lname: "Megida"}
console.log(names.fname); // Dillion
console.log(names.hasOwnProperty("mname")); // false 

Object.create()
function DogObject(name, age) 
{
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
    return "I am a dog"}
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);

//function DogObject(name, age) {
//    this.name = name;
//    this.age = age;}
//DogObject.prototype.speak = function() {
//    return "I am a dog";}
//let john = new DogObject("John", 45);



let animal = {eats: true};
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {}); 


//let animal = {
//    eats: true};
//  let rabbit = Object.create(animal, {
//    jumps: {
//      value: true  }});
//  alert(rabbit.jumps); // true
  