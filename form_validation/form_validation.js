//function to validate name
function validateName(name)
{
    
    if(name.trim()===''){
        document.getElementById('nameError').textContent='Name id required'
        return false;
    }
    document.getElementById('nameError').textContent='';
    return true;
}

//function to validate email
function validateEmail(email)
{
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        document.getElementById('emailError').textContent='please enter a valid email address'
        return false;
    }
    document.getElementById('emailError').textContent='';
    return true;

    


}

//function to validate age
function validateAge(age)
{

    if(isNaN(age)||age<18||age>100){
        document.getElementById('ageError').textContent='please enter a valid age between 18 and 100';
        return false;
    }
    document.getElementById('ageError').textContent='';
    return true;

}








function validatePhoneNumber(phone)
{
    const phonePattern=/^[0-9]{10}$/;
    if(!phonePattern.test(phone)){
        document.getElementById('phoneError').textContent='please enter a valid 10 digit phone number';
        return false;
    }
    document.getElementById('phoneError').textContent='';
    return true;

}


//form validation function
function validateForm(event)
{
    isValid=true;
    //get form values
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const age=document.getElementById('age').value;
    const phone=document.getElementById('phone').value;
//validate each field
if(!validateName(name)){
    isValid=false;
}
if(!validateEmail(email)){
    isValid=false
}
if(!validateAge(age)){
    isValid=false
}
if(!validatePhoneNumber(phone)){
    isValid=false
}

//prevent form from submission if any field is invalid
if(!isValid)
{
    event.preventDefault();
}
else
{
    //log the values submitted in the form
    console.log("form submitted with values:");
    console.log("Name: ",name);
    console.log("Name: ",email);
    console.log("Name: ",age);
    console.log("Name: ",phone);

}
}



//attach event lisener to form submission
document.getElementById('submitBtn').addEventListener('click',validateForm);