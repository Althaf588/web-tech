// string datatype
// let inst='pyspiders'
// console.log("Institute name",inst)

// let branch="basavanagudi"
// console.log("branch==>",branch)

// let location=`bangalore`
// console.log("location==>",location)

// console.log(`name of institue ${inst}`)

// console.log("type of institue",typeof inst)

// '''number datatype'''
// let a=10
// console.log(a)
// let b=5.5
// console.log(b)
// console.log(typeof a)

// 3.bigint datatype
// let bignt=BigInt("12345678912345667890")
// console.log("Big number",bignt)

// let bignt1=12345678912345667896n
// console.log("Big number",bignt1)

// console.log(typeof bignt)

// console.log(typeof bignt1)


//4.undefine datatype
// let salary
// console.log(salary)

// console.log(typeof salary)


// salary=20000
// console.log("type",ypeof salary)

// salary='phonepay'
// console.log("type",typeof salary)

//5.boolean
// let a=10
// let b=10
// console.log(Boolean(a==b))
// console.log(Boolean(a!=b))
// console.log(typeof (a==b))

// 6.null datatype
// let age=null
// console.log(age)
// console.log(typeof age)

//7.object datatypes
let pysp={
    head:'irshan',
    trainers:6,
    stuff:10,
    isoffToday:false,
    holiday:undefined,
    Fees:35000.10

}
p=pysp
console.log(p)
console.log(typeof p)
console.log("head==>",p.head)
console.log("Fees==>",p.Fees)
console.log("Trainers==>",p.trainers)
console.log("ISOFFtoady==>",p.isoffToday)
console.log("Holiday==>",p.holiday)
console.log("stuff==>",p.stuff)
pysp['holiday']='kelbeku'
console.log(pysp)
pysp['location']="basavanagudi"
console.log(pysp)
delete(pysp.location)
console.log(pysp)