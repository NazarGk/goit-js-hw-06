

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSumbit);


function handleSumbit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    

    const password = formElements.password.value;
    

    const formData = {
        mail,
        password,
    }
    

    if(event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value == ''){
        alert('Use your keybord man!');
    } else {console.log('Email :', mail); console.log('Paswword :', password); console.log(formData);
}
event.currentTarget.reset();
}
    

