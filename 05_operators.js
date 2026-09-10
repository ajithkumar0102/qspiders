//arithmetic operator
// '+' true  -->1 , false --> 0 ,if string --> concatenation, null --> 0
console.log(10+20);//30
console.log("10"+20);//1020
console.log(10+"20");//1020
console.log(10+true);//11
console.log(false+11);//11
console.log(10+null)//10
console.log(10+undefined)//NaN
console.log(10+20+"ja")//30ja
console.log(10+"js"+20)//10js20
console.log(typeof (10+"js"+20))//string

//'-','*','/','%' --
//"-" substraction
console.log(10-20);//-10
console.log("10"-20);//-10
console.log(10-"20");//-10
console.log("20"-"20")//0
console.log(10-true);//9
console.log(false-11);//-11
console.log(10-null)//10
console.log(10-undefined)//NaN
console.log(10-20-"ja")//NaN
console.log(10-"js"-20)//NaN
console.log(typeof (10-"js"-20))//NUMBER
//'*' multiplication
console.log(10*2);//20
console.log("10"*2);//20
console.log(10*"2");//20
console.log("20"*"2")//40
console.log(10*true);//10
console.log(false*11);//0
console.log(10*null)//0
console.log(10*undefined)//NaN
console.log(10*"ja")//NaN
//'/' division
console.log(10/5)//2
console.log("20"/2)//10
console.log(20/"2")//10
console.log("20"/"20")//1
console.log(10/true)//10
console.log(10/false)//infinity
console.log(10/null)//infinity
console.log(10/undefined)//Nan
console.log(10/"abc")//Nan
//"%" modulues
console.log(10%5)//0
console.log("20"%3)//2
console.log(20%"19")//1
console.log("20"%"20")//0
console.log(10%true)//0
console.log(10%false)//NaN
console.log(10%null)//NaN
console.log(10%undefined)//Nan
console.log(10%"abc")//Nan
//"**" EXPONENT
console.log(2**2)//4
console.log(2**3)//8
console.log("2"**"3")//8
console.log(2**undefined)//NaN

//Increment  and Decrement operators
//pre increment
let a = 10;
console.log(++a)//11
console.log(a)//11
//post increment
let num =10;
console.log(num++)//10
console.log(num)//11
//pre decrement
let b = 10;
console.log(--b)//9
console.log(b)//9
//post decrement
let c =10;
console.log(c--)//10
console.log(c)//9

//comparision or Relational operator
let num1 =10;
let num2=20;
let num3 ="10";
console.log(num1>num2)//flase
console.log(num1<num2)//true
console.log(num1<=num3)//true
console.log(num1>=num3)//true
console.log(num1==num3)//true
console.log(num1===num3)//flase
console.log(num1!=num3)//flase
console.log(num1!==num3)//true
console.log(""==0)//true
console.log(""===0)//false
console.log(false==0)//true
console.log(false===0)//flase
//logical operator
let x = 10;
let y=20;
let z="10";
 //AND &&
 