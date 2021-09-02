const form1 = document.getElementById('form1');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const birth = document.getElementById('birth');
const fees = document.getElementById('fees');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('password-confirm');

document.getElementById("form1").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //first take the values from the inputs
    const firstnameValue = firstname.value.trim(); //inner function to remove the white space
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthValue = birth.value.trim();
    const feesValue = fees.value.trim();
    const passwordValue = password.value.trim();
    const passwordcheckValue = passwordcheck.value.trim();

    
    if(firstnameValue === '' || !isNaN(firstnameValue) || (firstnameValue.length <= 2)){ // show error . add an error class
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
    
    if(birthValue === '' ){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(birth, 'Please choose a Date');
    } else { // add success class
        setSuccessFor(birth);
    }    
    
    if(feesValue === '' || (feesValue < 0)){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(fees, 'Please type in the ammount of remaining Fees for the Semester!');
    } else { // add success class
        setSuccessFor(fees);
    }   
    
    if((passwordValue === '') || (passwordValue.length <= 2) || (passwordcheckValue === '') || (passwordcheckValue.length === !passwordValue.length) || (passwordcheckValue !== passwordValue)){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(password, 'Please type in your Password! And Confirm on the Next Field!');
    } else { // add success class
        setSuccessFor(password);
    }
    
    if((passwordValue === '') || (passwordcheckValue === '') || (passwordcheckValue.length !== passwordValue.length) || (passwordcheckValue !== passwordValue)) { //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(passwordcheck, 'Please type again your Password!');
    } else if(passwordValue == passwordcheckValue){ // add success class
        setSuccessFor(passwordcheck);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
    document.getElementById('student-info').innerHTML = `We weren't able to collect your Information! Please Fill out all the fields in the Form Properly`;
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';

    document.getElementById('student-info').innerHTML = `You Successfully Added your Info: <br/> First Name: ${firstname.value} , <br/> Last Name: ${lastname.value} <br/> E-mail: ${email.value} <br/> Date of Birth: ${birth.value} <br/> Tuition Fees for the Semester: ${fees.value} Euro! <br/> Password: ${password.value} `;
}