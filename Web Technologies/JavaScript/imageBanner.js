var i=0;
setInterval(function(){
    if(i%2==0){
        document.getElementById("imageId").src="gmail.jpg"
        document.getElementById("d1").style.fontSize="20pt"
    }else {
        document.getElementById("imageId").src="google.png"
        document.getElementById("d1").style.fontSize="40pt"
    }
    i++;
},2000)