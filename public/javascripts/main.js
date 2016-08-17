window.onload = function() {
    var btn = document.getElementById('btn'),
        username = document.getElementById('username'),
        password = document.getElementById('password');

    btn.addEventListener('click', function() {
        console.log(username.value)
        console.log(password.value)
    });
};