var a=document.querySelectorAll("h1")
var b=document.querySelectorAll(".hclass")
console.log(a)
a[0].innerHTML="changed using query selector";
a[1].style.fontFamily='algerian'
console.log(b)
a[2].innerHTML="python changed using inner html"
for(let i=0;i<a.length;i++)
{
    
a[i].style.background='blue';

}

for(i=0;i<b.length;i++)
    {
        
    b[i].style.color='white';
    
    }