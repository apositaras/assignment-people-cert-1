const start = document.getElementById('start');

document.getElementById("form31").addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs3();
});

function checkInputs3() {
    //first take the values from the inputs
    const startValue = start.value.trim();
    
    
    if(startValue === '' ){ //|| !isNaN(emailValue) || (emailValue.length <= 2)
        setErrorFor(start, 'Please choose a Date');
    } else { // add success class
        setSuccessFor(start);
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