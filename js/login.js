const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)

if(data.username=="leila" && data.password=="leila") {
    console.log("Ha ingresado");
    window.location.href="index.html";
}
else {
    alert("El usuario o la contraseña es incorrecto");
}
})