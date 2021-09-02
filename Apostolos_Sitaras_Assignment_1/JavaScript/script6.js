const form6 = document.getElementById('form6');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');

document.getElementById("form6").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs5();
});

function checkInputs5 () {
    const firstnameValue = firstname.value.trim(); //inner function to remove the white space
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();

    if(firstnameValue === '' || !isNaN(firstnameValue) || firstnameValue.length <= 2) { // show error . add an error class
        setErrorFor(firstname, 'First Name cannot be Blank, or have a number as a value! minimum 3 letters');
    } else { // add success class
        setSuccessFor(firstname);
    }
    
    if(lastnameValue === '' || !isNaN(lastnameValue) || (lastnameValue.length <= 2)){
        setErrorFor(lastname, 'Last Name cannot be Blank, or have a number as a value! minimum 3 letters');
    } else { // add success class
        setSuccessFor(lastname);
    }
    
    if(emailValue === '' || !isNaN(emailValue) || (emailValue.length <= 7)){
        setErrorFor(email, 'E-mail cannot be Blank, or contain less than 7 characters!');
    } else { // add success class
        setSuccessFor(email);
    }    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
    document.getElementById('contact').innerHTML = `We weren't able to collect your Information! Please Fill out all the fields in the Form Properly`;
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';

    document.getElementById('contact').innerHTML = `You Successfully Added your Info: <br/> First Name: ${firstname.value} , <br/> Last Name: ${lastname.value} <br/> E-mail: ${email.value} <br/> We will be in Touch! Thank You!`;
}