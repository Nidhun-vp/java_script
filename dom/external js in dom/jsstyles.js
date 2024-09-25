let title1=document.createElement('h1')
let title2=document.createElement('h1')
title1.innerHTML="<h2>loreum1</h2><br><p>loreum text for paragraph</p>"
title2.innerHTML="<h2>loreum2</h2><br><p>loreum text for paragraph</p>"

document.body.appendChild(title1)
document.body.appendChild(title2)

var a=document.querySelectorAll('h1')
var b=document.querySelectorAll('h2')
console.log(a)
//
let button1=document.createElement("button")
button1.textContent="change backgroundcolor"
document.body.append(button1)

let button2=document.createElement("button")
button2.textContent="styletext"
document.body.append(button2)





//
button1.onclick=function()
{
    if(document.body.style.backgroundColor==='lightblue')
    {
        document.body.style.backgroundColor='white'
    }
    else
    {
        document.body.style.backgroundColor='lightblue'
    }
}


button2.onclick=function()
{
    for(let i=0;i<a.length;i++)
    {
        a[i].style.color='green'
         b[i].style.color='red'
         a[i].style.backgroundColor='aqua'
         b[i].style.fontStyle='italic'
    }
}
