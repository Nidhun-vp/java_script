let heading1=document.createElement('h1')
let heading2=document.createElement('h2')
 h1=document.createTextNode("Heading1")
 heading1.appendChild(h1)
document.body.appendChild(heading1)
document.write("<br>")

let paragraph1=document.createElement('p')
 let p1=document.createTextNode("1.this content is created using textNode")
 paragraph1.appendChild(p1)
document.body.appendChild(paragraph1)
console.log(paragraph1)
document.write("<br>")


 h2=document.createTextNode("Heading2")
 heading2.appendChild(h2)
document.body.appendChild(heading2)
document.write("<br>")




document.write("<br>")
let paragraph2=document.createElement('p')
 let p2=document.createTextNode("2.this content is created using textNode")
 paragraph2.appendChild(p2)
document.body.appendChild(paragraph2)
console.log(paragraph2)


heading1.className="heading"
heading2.className="heading"
paragraph1.className="paragraph"
paragraph2.className="paragraph"
var a=document.querySelectorAll(".heading")
var b=document.querySelectorAll(".paragraph")
console.log(a)
console.log(b)
function styleHeading()
{
    for(let i=0;i<a.length;i++)
    {
        a[i].style.color='red'
    }
        
    

}


let b1=document.createElement('button')
b1.innerText='click';
document.body.appendChild(b1)
b1.onclick=function stylepara()
{
    for(let i=0;i<b.length;i++)
        {
            b[i].style.color='blue'
        }

}


document.write("<br>")


