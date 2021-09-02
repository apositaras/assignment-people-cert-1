const form41 = document.getElementById('form41');
const title = document.getElementById('title');
const description = document.getElementById('describe');
const date = document.getElementById('date')


document.getElementById("form41").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs4();
});

function checkInputs4() {
    //first take the values from the inputs
    const titleValue = title.value.trim(); //inner function to remove the white space
    const descriptionValue = describe.value.trim();
    const dateValue = date.value.trim();

    if(titleValue === '' || !isNaN(titleValue) || (titleValue.length <= 9)){ // show error . add an error class
        setErrorFor(title, 'Title cannot be Blank, or have a number as a value! minimum 10 letters');
    } else { // add success class
        setSuccessFor(title);
    }

    if(descriptionValue === '' || !isNaN(descriptionValue) || (descriptionValue.length <= 2)){
        setErrorFor(description, 'Please Describe your Assignment!');
    } else { // add success class
        setSuccessFor(description);
    }

    if(dateValue === '' ){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(date, 'Please choose a Date');
    } else { // add success class
        setSuccessFor(date);
    }    

    
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}