
function validateForm() {
    var form = document.forms["registration"];
    var password = form["password"].value;
    var confirmPassword = form["password2"].value;
    var name = form["name"].value;
    if(password.length <1 || confirmPassword.length <1||name.length<1)
    {
        alert ("Заполните поля.");
        return false;
    }
    if (password !== confirmPassword) {
        alert ("Пароли не совпадают");
        return false;
    }
    return true;
}
function submitForm() {
    if (validateForm()) {
        alert("Вы зарегистрированы.");
    }
}
function resetForm() {
    document.getElementById("error").innerHTML = "";
    document.forms["registration"].reset();
}