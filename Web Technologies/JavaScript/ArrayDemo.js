//int num1[10]={1,2,3,4,5,};  //C    
//int num1[]={1,2,3,4,5,6}      //Java 
var num1=[100,200,300,400,500] ;   //array created using literal style 
var num2 = new Array();         // array created using Array object with new keyword 
var num3 = new Array(200,100,600,500,300);  //array created using new keyword with initlaization 
document.write(num1.length+"<br/>")
document.write(num2.length+"<br/>")
document.write(num3.length+"<br/>")
num1.push(600);
num2.push(100);
num3.push(600);
document.write(num1.length+"<br/>")
document.write(num2.length+"<br/>")
document.write(num3.length+"<br/>")
document.write(num3+"<br/>");
document.write(num3.sort()+"<br/>")
document.write(num3.reverse()+"<br/>")
document.write(num3.join("->")+"<br/>")
num3.pop();
document.write(num3+"<br/>");
//var num4 = num3.splice(0,2);
//document.write(num4+"<br/>");
for(var i=0;i<num3.length;i++){
    if(num3[i]==200){
       num3.splice(i,1);
    }
}
document.write("After removed"+num3)


