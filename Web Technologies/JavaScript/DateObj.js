var dd = new Date();
document.write(dd+"<br/>");
document.write("Date "+dd.getDate()+"<br/>")
document.write("Month "+dd.getMonth()+"<br/>")
dd.setMonth(dd.getMonth()+1);   
document.write("Month after set "+dd.getMonth()+"<br/>")
document.write("Year "+dd.getFullYear()+"<br/>")
document.write("Hour "+dd.getHours()+"<br/>")
document.write("Minute "+dd.getMinutes()+"<br/>")
document.write("Second "+dd.getSeconds()+"<br/>")