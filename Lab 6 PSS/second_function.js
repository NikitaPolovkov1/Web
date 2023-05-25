function submitForm() {
    if (validateForm()) {
        alert("Вы зарегистрированы.");
    }
}
function resetForm() {
    document.getElementById("error").innerHTML = "";
    document.forms["registration"].reset();
}

function validateForm() {
    var form = document.forms["second"];
    var password = form["year"].value;
    var confirmPassword = form["day"].value;
    var name = form["name"].value;
    if(password == "" || confirmPassword == "" || name == "")
    {
        alert ("Заполните поля.");
        return false;
    }
    return true;
}