"use script";

// if u  import any java script files  to another file then you need to use import statement with  type=module  <script src="login.js" type="module"></script>
import auth from "./library.js"; // auth is  a classname defined in library.js

document.querySelector("button").onclick = function () {
  //alert("Hello, World!");
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  //   console.log(data1);
  //     console.log(data2);

  var authObj = new auth(); //creating an object of auth class
  console.log(authObj); // accessing the details array of auth class object

  var ans1 = authObj.checkemail(data1);
  console.log(ans1); // checking the email validity  ans1 may have true or false

  var ans2 = authObj.checkpassword(data2);
  console.log(ans2);

  if (ans1 && ans2) {
    document.querySelector("p").innerHTML = "ok";
  } else {
    document.querySelector("p").innerHTML = "Invalid Email or Password";
  }
};
