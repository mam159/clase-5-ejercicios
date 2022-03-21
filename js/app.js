import Button from "./button.js";
import list from "./list.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Click me!");

myDiv.innerHTML = myButton.render();

let myList = new list('Boca', 'River','Independiente');

myDiv.innerHTML = myList.render();