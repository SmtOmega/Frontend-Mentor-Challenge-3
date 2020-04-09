const form = document.getElementById('form');


form.addEventListener('submit', e =>{
    e.preventDefault();
const firstName = form['firstname'].value;
const lastName = form['lastname'].value;
const email = form['email'].value;
const password = form['password'].value;

if(firstName === ''){
    addError('firstname', 'First Name can not be empty')
}
else {
    removeError('firstname')
}
if(lastName === ''){
    addError('lastname', 'Last Name can not be empty')
}
else {
    removeError('lastname')
}
if(email === ''){
    addError('email', 'email can not be empty')
}
else if(!validateEmail(email)) {
    addError('email', 'This is not a valid email')
}
else {
    removeError('email')
}
if(password === ''){
    addError('password', 'Password can not be empty')
}
else {
    removeError('password')
}
})
function addError(field, message){
    const formControl = form[field].parentNode
    formControl.classList.add('error')
    const small = formControl.querySelector('small')
    small.innerText = message;
    //small.style.opacity = '1';
}

function removeError(field){
    const formControl = form[field].parentNode;
    const small = formControl.querySelector('small');
    //small.style.opacity = '0';
    formControl.classList.remove('error')
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}