const form = document.getElementById("form");
const email = document.getElementById("form3Example3");
const contraseña = document.getElementById("form3Example4");
const container = document.getElementById("container");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    logIn();
});

function logIn() {
    if(email.value == "example@gmail.com" & contraseña.value == "1234"){
        container.innerHTML=`
        <style>
        .cajab{
            display:flex;
            justify-content:space-around;
            background-color:pink;
            color:white;
            wrap:wrap;
        }
        </style>
        <div class="cajab">
        <h1>Ingreso exitoso</h1>
        <h2>Bienvenido</h2>
        </div>`
    }else if(email.value =! "example@gmail.com"){
        console.error("email no registrado")
}}
