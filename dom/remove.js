// Create ul element
let U = document.createElement("ul");
U.innerHTML = 'This is a ul tag created using createElement';
document.body.appendChild(U); 

// Create and append li elements to ul
let l1 = document.createElement("li");
l1.innerHTML = 'This is li1 tag created using createElement';
U.appendChild(l1);  // Corrected from document.U.appendChild to U.appendChild

let l2 = document.createElement("li");
l2.innerHTML = 'This is li2 tag created using createElement';
U.appendChild(l2);  // Corrected from document.U.appendChild to U.appendChild

let l3 = document.createElement("li");
l3.innerHTML = 'This is li3 tag created using createElement';
U.appendChild(l3);  // Corrected from document.U.appendChild to U.appendChild



U.id='l1'
// l1.className='myList'
// l2.className='myList'
// l3.className='myList'

let button=document.createElement("button")
button.textContent="remover"
button.id='btn1'
document.body.append(button)

let button1=document.getElementById('btn1')

        
//attach event lisener
button1.addEventListener('click',function ()
{
    let list=document.getElementById('l1')
    if(list.lastElementChild)
        {
            list.removeChild(list.lastElementChild)

        }    
});





//
function removelastItem(){
   
  let list=document.getElementById('myList')
    if(list.lastElementChild)
        {
            list.removechild(list.lastElementChild)

        }           

}