function a_1(){
    var myBrowser = {name: "Microsoft Internet Explorer", version: "9.0"};
    alert(myBrowser.name);
    alert(myBrowser.version);
}
function a_2(){
    var myBrowser = new Object();
    myBrowser.name= "Microsoft Internet Explorer";
    myBrowser["version"]= "9.0";
    alert(myBrowser.name);
    alert(myBrowser.version);
}
function b_1(){
    var car = new Object();
    car.color = "Белый";
    car.maxSpeed=220;
    car.brand = "Nissan";
    document.write("У машины цвет: " + car.color);
    var moto = {
    color: "Синий",
    horsePower: 130,
    brand: "Yamaha"};
    document.write("У мотоцикла производитель: " + moto.brand)
}
function b_2(){
    var myBrowser = new Object();
    myBrowser.name= "Microsoft Internet Explorer";
    myBrowser["version"]= "9.0";
    for (var a in myBrowser)
    {
        alert(a);
        alert(myBrowser[a]);
    }
}
function c_3(){
    function Car(name, model, color) { /* конструктор объекта car*/
    this.name = name; 
    this.model = model; 
    this.color = color; }
    var myCar=new Car;
    myCar.name="Мерс";
    myCar.model="600";
    myCar.color="green"; 
    Car.prototype.owner = "Иванов"; /* добавляем новое свойство*/
    alert(myCar.name+" "+myCar.model+" "+myCar.color+" "+myCar.owner);
}
function stringWrite(){
    // используем измененный класс
    var s = new String("Это строка");
    s.color = "red";
    document.write(s.color);
}
function redirectToPage() {
    // Установка нового URL для перехода
    window.location.href = '/13.html'; // Замените URL на нужный вам
  }    

