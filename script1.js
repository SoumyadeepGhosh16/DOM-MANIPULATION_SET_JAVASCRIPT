//understanding the working of DOM

//console.dir(window.document);
//prints the document functions and 
//methods available in the document model of windows 
//which is a part of browser

//changing style of background through javascript
document.body.style.background="aquamarine";


let header=document.getElementById("heading");
console.log(header)

let header2=document.getElementsByClassName("heading2");
console.log(header2)

let parahs=document.getElementsByTagName("p");
console.log(parahs);

//queryselectors

let element=document.querySelector("p");//1st element
console.log(element);

let element2=document.querySelectorAll("p");//all elements
console.log(element2);

let element3=document.querySelector(".heading2");//1st element
console.log(element3);

let element4=document.querySelectorAll(".heading2");//all elements
console.log(element4);

//accessing child nodes
let doc=document.querySelector("div").children;
console.log(doc)

let div=document.querySelector("div");
console.dir(div);

//div.innerText="abcd" to change div content irrespective of html code

//div.innerHTML------>to print all the content inside particular div

let h3=document.querySelector("h3");
console.dir(h3.innerText);

//headings.innerHTML="<i>new Heading<i>";sets new heading in italic

h3.innerText="favourite"+" "+h3.innerText;

let divs=document.querySelectorAll(".box");


divs[0].innerText="1st div";
divs[1].innerText="2nd div";
divs[2].innerText="3rd div";

//let idx=1;
//for(divs of div){
// div.innerText="new name of div $(idx)";
// idx++;
//}




