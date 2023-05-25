function get_hour() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  return Number(hours);
}
function check_time() {
  let hi = document.getElementById("hello");
  let content = "начало";
  let now = get_hour();
  if (now >= 7 && now < 12) {
    content = "Доброе утро !";
  } else if (now >= 12 && now < 17) {
    content = "Добрый день!";
  } else if (now >= 17 && now < 24) {
    content = "Добрый вечер !";
  } else {
    content = "Доброй ночи !";
  }
  hi.textContent = content;
}
function check(a, b, c) {
  if (Number(a) > 0 && Number(b) > 0 && Number(c) > 0) {
    return true;
  } else {
    return false;
  }
}
function check2(a, b, c) {
  if (Number(a) < Number(b)) {
    return true;
  } else {
    return false;
  }
}
function check3(a, b, c) {
  if (Number(c) < Number(b) - Number(a)) {
    return true;
  } else {
    return false;
  }
}

function do_math() {
  const tableBody = document.querySelector("#resTable tbody");
  let znach = [];
  let x = [];
  let x_start = document.getElementById("x_start").value;
  let x_end = document.getElementById("x_end").value;
  let k = document.getElementById("k").value;
  let result = document.getElementById("result");
  if (check(Number(x_start), Number(x_end), Number(k))) {
    if (check2(Number(x_start), Number(x_end), Number(k))) {
      if (check3(Number(x_start), Number(x_end), Number(k))) {
        result.textContent = "";
        for (let i = Number(x_start); i < Number(x_end); i += Number(k)) {
          znach.push((i + 1) / (Math.pow(2, i) * (i - 1)));
          x.push(i);
        }
        while (tableBody.firstChild) {
          tableBody.removeChild(tableBody.firstChild);
        }
        for (let i = 0; i < znach.length; i++) {
          const row = document.createElement("tr");

          const cell1 = document.createElement("td");
          cell1.textContent = x[i];

          // Создание ячейки для второго массива
          const cell2 = document.createElement("td");
          cell2.textContent = znach[i];

          // Добавление ячеек в строку
          row.appendChild(cell1);
          row.appendChild(cell2);

          // Добавление строки в тело таблицы
          tableBody.appendChild(row);
        }
      } else {
        result.textContent =
          "ошибка, шаг не должен превышать разницы между начальным и конечными значениями !";
      }
    } else {
      result.textContent =
        "ошибка, начальное значение должно быть меньше конечного !";
    }
  } else {
    result.textContent =
      "ошибка, у вас отрицательные числа или вы их не ввели !";
  }
}
function redirectToPage() {
  // Установка нового URL для перехода
  window.location.href = "/14.html"; // Замените URL на нужный вам
}
