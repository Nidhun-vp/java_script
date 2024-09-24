var a=document.querySelectorAll(".hclass")
var b=document.querySelectorAll(".pclass")
console.log(a)
console.log(b)
function astyle()
{
    for(let i=0;i<a.length;i++)
        {
           a[i].style.color='red'
           a[i].style.background='black'
        }

}

function bstyle()
{
    for(let i=0;i<b.length;i++)
        {
           b[i].style.color='white'
           b[i].style.background='black'
        }

}
function changebg()
{
    document.body.style.background='blue'
}
