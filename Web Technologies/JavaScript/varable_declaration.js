/*
int a=10;
a=20;       //re-assign 
int a=30;   // re-declare 

*/

var a=10;
a=20;               //re-assign
var a="Ravi";       // re-declaration 

let b=10;
b=20;
//let b=30;       // we can't re-declare. 

function sayHello(name){
    if(name=="Ravi"){
        let msg ="Welcome Valid user"
    }else {
        let msg = "Welcome InValid User"
    }
    return msg;
}
//document.write(sayHello("Ravi Kumar"));

for(var i=0;i<1000000;i++){}
document.write("<br/> "+i);

for(let j=0;j<1000000;j++){}
//document.write("<br/> "+j);

const c=300;
//c=400;              // we can't change the value 

