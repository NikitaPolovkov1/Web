function privet() {
    rezultat = confirm("Проверим какую кнопку вы нажали")
    if(rezultat)
    {
        document.write("Вы нажали ок")
    }
    else{
        document.write("Вы нажали отмена")
    }
}


function showPrompt() {
    var response = confirm("Нравится ли вам картинка?");
    if (response == true) {
        alert("Отлично, мы рады, что она вам нравится!");
    } else {
        alert("Мы постараемся улучшить наш контент!");
    }
}

function showName() {
    let userName = prompt('Введите ваше имя:');
    document.write('<p style="color:green;">Добрый день, ' + userName + '!</p>');
}

function getAll(){
   
		let lastName = prompt('Введите вашу фамилию:');
		let firstName = prompt('Введите ваше имя:');
		let middleName = prompt('Введите ваше отчество:');
		let initials = firstName.toUpperCase().charAt(0) + '.' + middleName.toUpperCase().charAt(0) + '.';
		let greeting = 'Добрый день, ' + lastName.toUpperCase() + ' ' + initials  + '. Мы рады приветствовать вас на сайте ПСС!';
		document.write('<p style="color:green;">' + greeting + '</p>');
	

}


