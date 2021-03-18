var str1 = "Welcome to JavaScript training";    //literal style object creation 
var str2 = new String("Welcome to JavaScript training ");  //creating object using new keyword
document.write(str1+"<br/>")
document.write(str2+"<br/>")
document.write(str1.toLowerCase()+"<br/>")
document.write(str1.toUpperCase()+"<br/>")
document.write(str1.indexOf('e')+"<br/>")
document.write(str1.lastIndexOf('i')+"<br/>")
document.write(str1.substring(5)+"<br/>")
document.write(str1.substring(5,10)+"<br/>")
document.write(str1.search("JavaScript")+"<br/>")
document.write(str1.search("Python")+"<br/>")
document.write(str1.replace("JavaScript","TypeScript")+"<br/>")
var data = str1.split(" ");
document.write("Number of words "+data.length)


