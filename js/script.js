let startBtn=document.querySelector('#btn');
let result=document.querySelector("#result");
startBtn.addEventListener('click',startValidation);
function startValidation(){
    let typeValidation=parseInt(prompt('1.Email, 2.Phone, 3.Postal Code'));

    switch(typeValidation){
        case 1:
            emailValidator();
            break;
        case 2:
            phoneValidate();
            break;
        case 3:
            postalValidator();
            break;
        default:
            alert('Invalid');

    }
}
function emailValidator(e){
    let re=/^([a-zA-Z0-9]\.?)+[^\.?]@([a-zA-Z0-9]\.?)+[^\.?]$/;
    let email_id=prompt('Enter Your Email Address to validate: ');
    if(re.test(email_id)){
        result.innerHTML=`<h2>${email_id} is Valid</h2>`;
    }
    else{
        result.innerHTML=`<h2>${email_id} is invalid</h2>`;
    }
}
function phoneValidate(){
    let re=/^(\+)?(88)?01[0-9]{9}$/;
    let cell=prompt('Enter Your Phone Number to validate: ');
    if(re.test(cell)){
        result.innerHTML=`<h2>${cell} is Valid</h2>`;
    }
    else{
        result.innerHTML=`<h2>${cell} is invalid</h2>`;
    }
}
function postalValidator(){
    let re=/^[0-9]{4}$/;
    let postalCode=prompt('Enter Your Postal Code');
    if(re.test(postalCode)){
        result.innerHTML=`<h2>${postalCode} is Valid</h2>`;
    }
    else{
        result.innerHTML=`<h2>${postalCode} is invalid</h2>`;
    }
}
