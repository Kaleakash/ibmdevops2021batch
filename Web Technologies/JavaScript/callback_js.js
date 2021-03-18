/*function personInfo(fname,callback){
        return "Welcome "+callback(fname);
}
function maleInfo(name){
    return "Mr "+name;
}
function femaleInfo(name){
    return "Miss "+name;
}
document.write(personInfo("Ravi",maleInfo));
document.write("<br/>");
document.write(personInfo("Reeta",femaleInfo));
//callback funtion using anoymous function style 
document.write("<br/>");
document.write(personInfo("Ajay",function(name) {
    return "Mr "+name;
    })

);
*/
var num=[100,200,300,400,500];
document.write(num+"<br/>")
document.write("Using classical for loop<br/>");
for(var i=0;i<num.length;i++){
    document.write(num[i]+"<br/>")
}
document.write("Using forEach function <br/>")
num.forEach(dis);      // this function takes function callback concept.

function dis(n){
    document.write(n+"<br/>")
}

document.write("Using forEach with Anonymous function<br/>")
num.forEach(function(n){
    document.write(n+"<br/>")
})