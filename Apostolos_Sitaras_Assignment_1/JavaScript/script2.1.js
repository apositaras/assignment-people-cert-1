const form2 = document.getElementById('form2');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


document.getElementById("form22").addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs2();
});


function checkInputs2() {
    //first take the values from the inputs
    const firstnameValue = firstname.value.trim(); //inner function to remove the white space
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    // const birthValue = birth.value.trim();
    const passwordValue = password.value.trim();
    

    
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
    
    if(emailValue === '' || !isNaN(emailValue) || (emailValue.length <= 2)){
        setErrorFor(email, 'E-mail cannot be Blank!');
    } else { // add success class
        setSuccessFor(email);
    }    
    
    if((passwordValue === '') || (passwordValue.length <= 2)){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(password, 'Please type in your Password! And Confirm on the Next Field!');
    } else { // add success class
        setSuccessFor(password);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
    document.getElementById('trainer-msg').innerHTML = `We weren't able to collect your Information! Please Fill out all the fields in the Form Properly`;
    //`We weren't able to find you in Our Data Base! Please Check if all the fields in the Form were filled Properly`;
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';

    document.getElementById('trainer-msg').innerHTML = `You Successfully Added your Info: <br/> First Name: ${firstname.value} , <br/> Last Name: ${lastname.value}, <br/> E-mail: ${email.value}, <br/> Password: ${password.value} <br/> Thank you!`;
}
// const birthValue = birth.value.trim();
// console.log(birthValue);