var obj1 = 100.4567;             //literal style 
var obj2 = new Number(100); //object style 
document.write(obj1+"<br/>")
document.write(obj2+"<br/>")
document.write(obj1.toPrecision(3)+"<br/>")
document.write(obj1.toFixed(2)+"<br/>")
document.write(obj1.toString()+obj2.toString());