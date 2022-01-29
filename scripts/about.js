const ageSpan = document.getElementById("age");

const dateNow = new Date(Date.now());
let age = dateNow.getFullYear() - 1998;

if (dateNow.getMonth() == 0 && dateNow.getDate() < 26){
    age--;
}

ageSpan.innerText = age + " years old";