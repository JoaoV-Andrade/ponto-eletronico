const diaSemana1 = document.getElementById("diaSemana")
const diaMesAno1 = document.getElementById("diaMesAno")
const hora1 = document.getElementById("hora")

// todo cojunto numérico (exceo o ano) deve ter 2 digitos
// retornar dia da semana por extenso

function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) +"/" + date.getFullYear();
 }

function horaCompleta(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

 diaMesAno1.textContent = dataCompleta();
 hora1.textContent = horaCompleta();