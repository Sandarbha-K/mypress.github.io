let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()  //prevents form from auto submit 
    let username = document.getElementById('username').value;//extract the value from username
    console.log(username);

    let phone = document.getElementById('phone').value;
    console.log(phone);

    let email = document.getElementById('email').value;
    console.log(email);

    let box = document.getElementById('box').value;
    console.log(box);



});
