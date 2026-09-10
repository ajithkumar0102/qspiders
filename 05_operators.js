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
//logical operator---> its return first FALSY value last TRUTHY value
let x = 10;
let y=20;
let z="10";
 //AND && 
 console.log(x<y && y>x)//false
 console.log(x===z&&x==z)//false
 console.log(true && true && true)//true
 console.log(0&&20)//20
 console.log(10&&20)//20
 console.log(""&&"js")//""
 //OR || ---> its return first TRUTHY value last FALSY value
 console.log(x>y || y>x)//true
 console.log(10||20)//10
 console.log(""||"js")//js
 console.log(0||20)//20
 //NOT (!)
 console.log(!true)//false
 console.log(!10>5)//false
 console.log(!false)//true

// 5. ASSIGNMENT OPERATORS
//+= -= *= /= %=
// +=
let numm = 10
numm += 5
console.log(numm) //15
numm += "10"
console.log(numm) //1510

// -=
let num4 = 20
num4 -= 5
console.log(num4)  //15
num4 -= "5"
console.log(num4) //10

// '*='
let num5 = 5
num5 *= 2
console.log(num5) //10
num5 *= "2"
console.log(num5) //20

// /=
let num6 = 20
num6 /= 2
console.log(num6) //10
num6 /= "2"
console.log(num6) //5

// %=
let num7 = 10
num7 %= 3
console.log(num7) //1
num7 %= "2"
console.log(num7) //1

//TERNARY / CONDITIONAL OPERATOR
//Syntax: condition ? trueBlock : falseBlock

//EXAMPLE 1
let understandingJs = true;
understandingJs ? console.log("Meeke Manchidi") : console.log("ni chavu nuvvu chavu")

//EXAMPLE 2
let amount = 200
let result = amount >= 150 ? "Eat Chicken Biryani" : "Muskoni Pg lo Tinnu"
console.log(result)

// UNARY OPERATORS

// UNARY PLUS (+)
console.log(+"10") //10
console.log(typeof +"10") //number
console.log(+"100abc") //NaN

// UNARY MINUS (-)
console.log(-"10") //-10
console.log(-true) //-1
console.log(-false) //-0