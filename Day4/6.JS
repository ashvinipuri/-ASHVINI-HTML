"use strict";
var category = ["Electronics", "Clothing", "Books", "Home &Garden"];
var products = [
  {
    name: " shirt",
    price: "&#8377 2000",
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqStFahfYh_LYaiV00P_gVL2dTzeXIWKvfg&s",
  },
  {
    name: " shirt",
    price: "&#8377 1200",
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_HKP0qmrkkTnwYwTIWPmo5CAvIIqDnQSHQ&s",
  },

  {
    name: " shirt",
    price: "&#8377 900",
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ANKTgPbfyZqrAtdh2x2S-HdqQP4-JgWzmA&s",
  },
];

//short circuit operator  for sorting
// is used to avoid unnecessary calculations.it is new feature introduced in ES6

category &&
  category.length > 0 &&
  category.forEach(function (v, i) {
    console.log(v, i); // v:value, i:index

    var listtag = document.createElement("li");
    console.log(listtag);

    listtag.innerHTML = v;

    document.querySelector("ul").append(listtag);
  });

products &&
  products.length > 0 &&
  products.forEach(function (v, i) {
    console.log(v, i);

    var divtag = document.createElement("div");
    console.log(divtag);

    divtag.className = "col-xl-4 text-center";

    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");

    imgtag.src = v.path;

    imgtag.className = "img-fluid";

    h2tag.innerHTML = v.name;
    ptag.innerHTML = v.price;

    divtag.append(imgtag, h2tag, ptag);
    document.getElementById("row").append(divtag);
  });
