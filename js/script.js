let ul = document.querySelector(".menu"),
    li = document.createElement("li"),
    body = document.querySelector("body"),
    title = document.getElementById("title"),
    column = document.querySelectorAll(".column"),
    adv = document.querySelector(".adv"),
    ans = document.getElementById("prompt");

li.classList.add("menu-item");
ul.appendChild(li);
li.textContent = "Пятый пункт";
body.style.background = "url(img/apple_true.jpg) center no-repeat";
title.innerHTML = "Мы продаем только подлинную технику Apple";
column[1].removeChild(adv);
ans.innerHTML = prompt("Как Вы относитесь к технике Apple?");