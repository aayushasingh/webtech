// document.getElementById("p1").innerHTML="hey this is week10";
// document.getElementById("p1").style.backgroundColor="blue";
// document.getElementsByClassName("p1")[2].innerHTML="hey this is week10";
// document.getElementsByClassName("p1").style.backgroundColor="blue";
document.getElementsByTagName("h1")[1].
innerHTML="getElementsbyTagName"; 
var select = document.getElementsByClassName("p1");
for(var i=0;i<=select.length;i++){
    select[i].innerHTML="hey this is week 10";
    select[i].style.cssText="background-color:plum;;font-size:30px;";
}
