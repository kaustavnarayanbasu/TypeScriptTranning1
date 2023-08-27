"use strict";
//let x  = 10;
let x = ["a", "b", "c"];
//let x  = 10;
let y = ["a", "b", "c", 1, true];
let Names = ["Ramesh", 20, "Pratick", 30, "Dinesh", 35];
console.log(Names);
//
let z;
z = 10;
z = "stringbb";
// Parameter type annotation
function greet(name) {
    if (typeof name == 'string') {
        console.log("Hello, " + name.toUpperCase() + "!!");
    }
    return "hello " + name;
}
let funi = greet("hi");
let fun2 = greet(10);
let a = "kaustav";
function add(num1, num2) {
    return num1 + num2;
}
let addval = add(10, 10.5) + "kaustav";
console.log(addval);
let loginRequest = {
    "emailId": "xyz@gmail.com",
    "password": "cfsfsffdfd",
    "loginType": "UserLogin"
};
let userDetails = loginUser(loginRequest);
function loginUser(loginRequest) {
    console.log(loginRequest.loginType);
    // db checking
    //it get Data from Databse 
    // return it to user
    let response = {
        "emailId": "vvcvcvvc.gmail.com",
        "mobileNo": 9888765545,
        "Name": "firdous alam"
    };
    return response;
}
