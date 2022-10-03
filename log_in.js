const loginButton = document.querySelector('#login');
const password = document.querySelector('#password');
const email = document.querySelector('#email');

loginButton.addEventListener('click', function () {
    if (email.value !== '' && password.value !== '') {
        console.log('email: ' + email.value + ' ' + 'password: ' + password.value);
     
        setTimeout(function () {
            document.location.href = "./userProfile.html";
        }, 2000)

    } else {
            alert('Please, enter your email and password to log in');
        }
    });

  