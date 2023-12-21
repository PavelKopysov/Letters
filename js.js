"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audioWin = new Audio("audio/huge win.wav");
let lettters = document.querySelectorAll(".boxes__box");
let cloneLetters;

for (let value of lettters) {
  value.addEventListener("click", function () {
    audioClick.play();
    if (value.previousElementSibling != null) {
      value.previousElementSibling.before(value);
      cloneLetters = document.querySelectorAll(".boxes__box");
      console.log(cloneLetters);
    } else if (value.nextElementSibling != null) {
      value.nextElementSibling.after(value);
      cloneLetters = document.querySelectorAll(".boxes__box");
      console.log(cloneLetters);
    }
    if (
      cloneLetters[0] == document.querySelector(".box_a") &&
      cloneLetters[1] == document.querySelector(".box_b") &&
      cloneLetters[2] == document.querySelector(".box_c") &&
      cloneLetters[3] == document.querySelector(".box_d") &&
      cloneLetters[4] == document.querySelector(".box_e") &&
      cloneLetters[5] == document.querySelector(".box_f")
    ) {
      audioWin.play();
    }
  });
}
