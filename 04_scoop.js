//! Global scope
var value1 = 10;
let value2 =20;
const value3 = 30;
//* accesing directly
console.log(value1);//10
console.log(value2);//20
console.log(value3);//30

//* accesing inside function
function gr(){
    console.log(value1);//10
    console.log(value2);//20
    console.log(value3);//30
}
gr()
//* accesing inside block
{
    console.log(value1);//10
    console.log(value2);//20
    console.log(value3);//30
}

//! global vs script scope
function hello() {{
    var name1 = "yash";
    let name2 ="praba";
    const name3 = "ajith";
}
    console.log(name1);//yash
    console.log(name2);//
    console.log(name3);//
}
hello()