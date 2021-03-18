//1st Example
/*var i=0;
document.write("Hello")

setTimeout(function(){
    //document.write("I Am setTimeout Asyn function");
    document.getElementById("msg").innerHTML="I Am setTimeout Asyn function"
},3000);

setInterval(function(){
    document.getElementById("info").innerHTML="Hi "+i
    i++;
},1000);

document.write("<br/>Hello")
document.write("<br/>Hi");
*/

var i=0;
setInterval(function(){
    if(i%2==0){
            document.bgColor="RED"
    }else {
        document.bgColor="Green";
    }
    i++;
},1000);
