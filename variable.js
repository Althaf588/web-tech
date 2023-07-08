//var variable

var username='ALTHAF'
console.log(username)

// var 1username='althaf'
//console.lon(1username)    //syntaxeerror inavlid or unexpected token

var username1='Bangalore'//declaration
console.log(username1)

username1='basavanagudi'//re-initialisation
console.log('user name after re-initialsation ==>',username1)

var _username='mangalore'
console.log(_username)

var $username1='udupi'
console.log($username1)

var username1='Karnataka'//re-declaration
console.log(username1)


//let variable
let emnumber=108        //declaration
console.log("\n to call ambukence dial",emnumber)

emnumber=407        //re-intialstion
console.log("\n re-initialisation==>",emnumber)

// let emnumber=100     //re-declaration error :identifer emnumber has already been created
// console.log(\n re-declartion ==>,emnumber)


{
    let emnumber=500
    console.log(emnumber)
}
console.log(emnumber)


//using const
const gravity=9.8   //declartion
console.log("gravity=>",gravity)

// gravity=10
// console.log("\n  re-initialisation gravity==>",gravity) //TypeError: Assignment to constant variable.

// const gravity=5.8   //re-declartion
// console.log("gravity=>",gravity)  SyntaxError: Identifier 'gravity' has already been declared


//vriable nothing
a=100
console.log("value of a==>",a)

const pi=3.14
let r=10
let area=pi*r**2
console.log("area of circle==>",area,'cm')
