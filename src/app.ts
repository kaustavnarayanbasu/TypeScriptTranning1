//let x  = 10;
let x :Array<string> = ["a","b","c"];
//let x  = 10;
let y :Array<any> = ["a","b","c",1,true];

let Names:Array<any>=["Ramesh",20,"Pratick",30,"Dinesh",35];
console.log(Names);
//
 interface LoginRequest {
    emailId : string,
    password : string,
    loginType ?: string
 }
interface LoginResponse {
    emailId ?: string,
    mobileNo ?: number,
    Name ?: string
}
//



let z:any ;
z =10;
z ="stringbb";

// Parameter type annotation
function greet(name:string|number):string {
    if(typeof name == 'string'){
        console.log("Hello, " + name.toUpperCase() + "!!");
    }
    return "hello "+name;
}
let funi:string = greet("hi");
let fun2:string = greet(10);
let a = "kaustav";

function add(num1:number,num2:number):number{
return num1+num2;
}
let addval:any=add(10,10.5)+"kaustav";
console.log(addval);
let loginRequest:LoginRequest = {
    "emailId" : "xyz@gmail.com",
    "password" : "cfsfsffdfd",
    "loginType" : "UserLogin"
}

let userDetails :LoginResponse = loginUser(loginRequest);

function loginUser(loginRequest: LoginRequest):LoginResponse {
    console.log(loginRequest.loginType);
    // db checking
    //it get Data from Databse 
   // return it to user
   let response : LoginResponse = {
        "emailId" : "vvcvcvvc.gmail.com",
        "mobileNo" : 9888765545,
        "Name" : "firdous alam"
   }
    return response;
}