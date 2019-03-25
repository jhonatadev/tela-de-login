document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('botão foi clicado');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse passou sobre o formulario');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email, password);
    

});