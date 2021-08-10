const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//All functions
// functions to show error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//funtion to show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//function to check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
//function to check if required fields have data
function chekcRequired(inputArray){
     inputArray.forEach(function(input){
      if (input.value==='')   {
         showError(input,`${getFieldId(input)} is required`)
      } else {
          showSuccess(input);
      }
    
     });
}
//function to get Id of the input field with correct case format.
function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1)
}
//This is an eventListener for the form on submit
form.addEventListener('submit',function(e){
    e.preventDefault();
   
   chekcRequired([username,email,password,password2]) 


})