const form4 = document.getElementById('form4');
const title = document.getElementById('title');
const description = document.getElementById('describe');
const oral = document.getElementById('oral-mark');
const total = document.getElementById('total-mark');



// console.log(firstname);
document.getElementById("form4").addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs4();
});

function checkInputs4() {
    //first take the values from the inputs
    const titleValue = title.value.trim(); //inner function to remove the white space
    const descriptionValue = describe.value.trim();
    const oralValue = oral.value.trim();
    const totalValue = total.value.trim();
    

    if(titleValue === '' || !isNaN(titleValue) || (titleValue.length <= 9)){ // show error . add an error class
        setErrorFor(title, 'Title cannot be Blank, or have a number as a value! minimum 10 letters');
    } else { // add success class
        setSuccessFor(title);
    }

    if(descriptionValue === '' || !isNaN(descriptionValue) || (descriptionValue.length <= 2)){
        setErrorFor(description, 'Please Describe Your Assignment');
    } else { // add success class
        setSuccessFor(description);
    }

    if(oralValue === '' || (oralValue.length < 1) ||  oralValue > 20){
        setErrorFor(oral, 'Oral Mark cannot be Blank! Max 20!');
    } else { // add success class
        setSuccessFor(oral);
    }
        
    if(totalValue === '' || (totalValue.length < 1) || totalValue > 100){
        setErrorFor(total, 'Total Mark cannot be Blank! Max 100 ');
    } else { // add success class
        setSuccessFor(total);
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