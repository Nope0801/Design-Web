const loginClose = document.getElementsByClassName('js-login-close')[0];
const login = document.getElementsByClassName('js-login')[0];
const loginContainer = document.getElementsByClassName('js-login-container')[0];
const loginBtn = document.getElementsByClassName('js-login-btn')[0];

function showLogin(){
    login.classList.add('open');
}
function hideLogin(){
    login.classList.remove('open');
}

loginBtn.addEventListener('click', showLogin);
loginClose.addEventListener('click', hideLogin);
login.addEventListener('click', hideLogin);

loginContainer.addEventListener('click', function(event){
    event.stopPropagation();
})



const registerClose = document.getElementsByClassName('js-register-close')[0];
const register = document.getElementsByClassName('js-register')[0];
const registerContainer = document.getElementsByClassName('js-register-container')[0];
const registerBtn = document.getElementsByClassName('js-register-btn')[0];

function showregister(){
    register.classList.add('open');
}
function hideregister(){
    register.classList.remove('open');
}

registerBtn.addEventListener('click', showregister);
registerClose.addEventListener('click', hideregister);
register.addEventListener('click', hideregister);

registerContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

