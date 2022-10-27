const formEl = document.querySelector('.login-form');

const handleSubmit = event => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
       return alert('Заполните все поля!');
    }

    const dataObj = {
        email: email.value,
        password: password.value,
    }

    console.log(dataObj);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);