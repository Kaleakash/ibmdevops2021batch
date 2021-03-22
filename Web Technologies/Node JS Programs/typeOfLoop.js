let num=[100,200,300,400,500,600];
console.log("Using for in loop");// index position 
for(let i in num){
    console.log("Index value "+i+" Value "+num[i]);
}
console.log("Using of loop");   // value 
for(let n of num){
    console.log("Value is "+n);
}