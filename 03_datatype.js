//!primative data type
//*1) number
var num1 = 10;
console.log(num1)//10
console.log(typeof num1)//number
let num2= 1.2;
console.log(num2)//1.2
console.log(typeof num2)//number

//*2) string
let name1 = 'ajith';
let name2 ="rahul";
let name3 =`varun`
console.log(name1); //ajith
console.log(typeof name1);//string
console.log(name2); //rahul
console.log(typeof name2);//string
console.log(name3); //varun
console.log(typeof name3);//string
//*3) boolean
const value   = true;
const value2 = false;
console.log(value)//true
console.log(typeof value)//boolean
console.log(value2)//false
console.log(typeof value2)//boolean
//*4) undefined
var trainer;
console.log(trainer)//undefined
console.log(typeof trainer)//undefined
//* 5) NULL
let a = null;
console.log(a); //null
console.log(typeof a)//object
//* 6) BIGINT
let accno = 123456789012345678901231;
let accno2 = 123456789012345678901231n
console.log(accno);//1.2345678901234569e+23
console.log(typeof accno);//number
console.log(accno2);//123456789012345678901231n
console.log(typeof accno2);//bigint
//* 7) SYMBOL
let new1 = Symbol("ram")
let new2 = Symbol("ram")
console.log(new1)//ram
console.log(typeof new1)//symbol
console.log(new2)//ram
console.log(new1 == new2)//false


//! non - primative datatypes
//*1) object
let info ={
    name:"ajith",
    age:20,
    palce : "hyd"
}
console.log(info);//{name: 'ajith', age: 20, palce: 'hyd'}
console.log(typeof  info);//object

//*2) array
let arr =[1,2,3,5]
console.log(arr)//[1,2,3,5]
console.log(typeof arr)//object

//* 3) functions
function greet(){
    console.log("hello")
}
greet()//hello
console.log(typeof greet)//function