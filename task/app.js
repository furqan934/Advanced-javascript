   const dive = document.getElementsByClassName("container");
   const h_1 = document.getElementById("h-1");
   const button = document.getElementById("btn");
   btn.addEventListener("click" , function(){
    if(h_1.getAttribute("class")===("text-red")){
        h_1.setAttribute("class" , "text-green");
    }
    else{
        h_1.setAttribute("class" , "text-red");
    }
});
const para = document.createElement("p");
const textNode =  document.createTextNode("enter your text here: ");
para.setAttribute("class" , "text-green");
para.appendChild(textNode);
document.body.appendChild(para)