
function validateForm() {
    var form = document.forms["registration"];
    var password = form["password"].value;
    var confirmPassword = form["password2"].value;
    if(password == "" || confirmPassword == "")
    {
        alert("Пустые поле(поля)!!!");
        return false;
    }
    if (password != confirmPassword) {
        alert ("Пароли не совпадают");
        return false;
    }
    if(password.length <= 5 || confirmPassword.length <= 5)
    {
        alert("Пароль должен состоять минимум из 5 символов");
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