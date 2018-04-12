function changeToRegister(){
    $('.login').fadeOut(1000);
    $('.register').fadeIn(1000);
}

function changeToLogin(){
    $('.login').fadeIn(1000);
    $('.register').fadeOut(1000);
}

function login(){
    let username = $('.usernameLogin').val();
    let password = $('.passwordLogin').val();

    axios.post('http://localhost:3000/login', {username: username, password: password})
    .then(function(response){
        alert(response.data.token);
    })
}

function register() {
    let username = $('.usernameRegis').val();
    let password = $('.passRegis').val();

    axios.post
}