//alert("Welcome alert message without window object")
//window.alert("Welcoem alert messag with window object")
var myWindow;
function openWin() {
    //window.open("home.html");
    //window.open("home.html","","width=400,height=300,menubar=yes")
myWindow = window.open("home.html","","width=600,height=300,left=500px,top=300px");
//myWindow.document.write("This is child window object");
myWindow.document.bgColor="yellow";
}
function closeWin() {
    myWindow.close();
}