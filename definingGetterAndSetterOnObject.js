"use strict";
var myName = {
  fname: "Jitendra",
  lname: "Bhagwat"
};

Object.defineProperty(myName, "fullName", {
  get: function() {
    return this.fname + " " + this.lname;
  }
});

var fullName = myName.fullName();
app.alert(fullName);