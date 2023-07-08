// let prompt=require("prompt-sync")({sigint:true})
// let n=prompt("enter number:")
// let ans=" "
// for (let a=1;a<=n;a++)
// {
//     ans+=a+' '
// }
// console.log(ans)

// let prompt=require("prompt-sync")({sigint:true})
// let n=prompt("enter number:")

// for (let a=1;a<=n;a++)
// {
//     if (n%2==0){
//         console.log("even number")
//     }
//     else{
//         console.log("odd number")
//     }
// }


// let prompt=require("prompt-sync")({sigint:true})
// let n=prompt("enter number:")
// evn=" "
// odd=''
// for (let a=1;a<=n;a++)
// {
//     if(a%2==0)
//     {
//         evn+=a+' '
//     }
//     else{
//         odd+=a+' ' 
//     }
// }
// console.log("even number",evn)
// console.log("odd number",odd)

//2.for in loop
// let state={
//     KARNATAKA:'BENGALORE',
//     TAMILNADU:'CHENNAI',
//     ANDRA:'AMARAVATHI',
//     TELANGANA:'HYDERBAD',
//     MAHARASTRA:'MUMBAI',
//     KERALA:'TIRUVANTAPURAM'
// }

// for (a in state ){
//     // console.log(a," capital is a",state[a])
//     console.log(`capital of ${a} is: ${state[a]}`)
// }

// let prompt= require('prompt-sync')({sigint:true})
// let states = {}
// inputs = prompt("Enter number of values : ")
// for (let a= 1; a<=
//   inputs; a++) {
//   let state = prompt("state"  + ":");
//   let capital = prompt("capital"  + ":");
  // states[prompt("Enter state: ")] = prompt("capital: ");
// }
// console.log("startes are:", states);
// for(j in states){
//     console.log(`The capital of ${j} is ${states[j]}`)
// }


//3.while loop
// let prompt= require('prompt-sync')({sigint:true})
// let n=prompt("enter number:")
// let a=1
// while(a<=n)
// {
//   ++a
//   console.log(a)
 
// }


//do while
// let prompt=require('prompt-sync')({sigint:true})
// let n=prompt("Enter number:")
// let i=10
// do{
//   "hello"
//   i++
// }
// while(i<=9){
// console.log(i)
// }


// let prompt=require('prompt-sync')({sigint:true})
// n=prompt("enter number:")
// let sum=0
// let i=0
// do{
//   sum+=i
//   i++
// }
// while(i<=n)

//   console.log(` sum of 1 to ${n}:${sum}`)

let prompt=require('prompt-sync')({sigint:true})
n=prompt("enter number:")
let sum=0
let i=0
while(i<=n){
sum+=i
i++
}
console.log(` sum of 1 to ${n}:${sum}`)