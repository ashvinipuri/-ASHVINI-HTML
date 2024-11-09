"use script";

console.log(document);
console.log(typeof document);

console.log(document.getElementById('x1'));  // its a method to get an element by id
console.log(document.getElementById("x2"));

//DOM event handling

document.getElementById('x1').onclick = function () {
    console.log(document.body);
    document.body.style.backgroundColor = "lightgrey";
    document.body.style.color='black'
}


document.getElementById("x2").onclick = function () {
  console.log(document.body);
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
};
