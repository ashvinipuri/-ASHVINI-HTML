"use strict";

document.getElementById("btn1").addEventListener("click", function () {
  // alert("Hello, World!");

  var xmlhttp = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  console.log(xmlhttp);
  console.log(XMLHttpRequest);
  // if 0 - request not initialized by users
  console.log(xmlhttp.status);
  xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log(xmlhttp.responseText); // it gives the response from server
      var res = JSON.parse(xmlhttp.responseText); // parse the response to JSON object
      console.log(res);
      //short circuit operator
      res &&
        res.length > 0 &&
        res.forEach(function (v, i) {
          console.log(v, i);
          var divtag = document.createElement("div");
          var imgtag = document.createElement("img");
          var h2tag = document.createElement("h2");
          var ptag = document.createElement("p");

          imgtag.src = v.image;
          h2tag.textContent = v.price;
          ptag.textContent = v.title;
          divtag.className = "col-md-3 text-center";
          imgtag.className = "img-fluid";
          divtag.append(imgtag, h2tag, ptag);
          document.querySelector("#row").appendChild(divtag);
        });
    }

    //1- Works when open method intiated and request has been setup
  };

  xmlhttp.open("Get", "https://fakestoreapi.com/products"); //this method will helps to  perform fetching data from the server

  xmlhttp.send(); //it send the request to the server and readystate become 2.
  //3 -requestrequest is in progress mode
  // 4 -rwquest cycle completed
});
