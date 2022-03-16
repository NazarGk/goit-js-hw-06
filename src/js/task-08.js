

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSumbit);


function handleSumbit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    
    formData.forEach((name, value) => {
        console.log(value, name);
    });

    if(event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value == ''){
        return alert('Use your keybord man!');
    }
    event.currentTarget.reset();
}
