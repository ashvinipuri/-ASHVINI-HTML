"use strict";

//  constructor used for lets initialize some dummy data/records  for demonstration
class auth {
  contructor() {
    this.details = [
      {
        email: "john@example.com",
        password: "John@123",
      },

      {
        email: "ankitgadge@.com",
        password: "Anks@13",
      },

      {
        email: "amolgiri1.com",
        password: "Abvfhge@999",
      },

      {
        email: "ashvinipuri@.com",
        password: "Aryuin@23",
      },
    ];
  }

  checkemail(emailid) {
    console.log(emailid);
    var exp = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[]{2,})?$/;
    var result = exp.test(emailid);
    return result;
  }

  checkpassword(password) {
    var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var result = exp.test(password);
    return result;
  }

  checkemailandpass() {}
}

export default auth;
