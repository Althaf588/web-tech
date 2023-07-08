// if condition
// let a=10
// let b=20
// if(a!=b)
// {
//     console.log("hello")
// }
// let prompt=require("prompt-sync")({sigint:true})
// let num=prompt("enter number")
// if(num>0)
// {
//     console.log("Enter postive number")
// }

//if else condition
// let x=10
// let y=20
// if(a==b)
// {
//     console.log("hello")
// }
// else
// {
//     console.log("hiii")
// }

//elseif conditon
// let prompt=require("prompt-sync")({sigint:true})
// let num=prompt("enter number:")
// if(num>0)
// {
//     console.log("Enter postive number")
// }
// else if(num<0){
//     console.log("Enter number is negative")
// }
// else{
//     console.log("Enterd number is zero")
// }


let prompt=require("prompt-sync")({sigint:true})
let age=prompt("enter number:")
if(age>0 & age<18)
{
    console.log("your kids")
}
else if(age>=18 & age<40){
    console.log("your yonger")
}
else if(age>=40 & age<80){
    console.log("your senior")
}
else if(age<0 & age>80){
    console.log("your god")
}
else{
    console.log("Invalid age")
}