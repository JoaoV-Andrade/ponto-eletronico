const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const arrayDayWeek = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"]


const dialogPonto = document.getElementById("dialog-ponto");


const regPonto = document.getElementById("reg-Ponto");
regPonto.addEventListener('click', () => {
    dialogPonto.showModal();
});


const dialogFechar = document.getElementById("dialog-fechar");
dialogFechar.addEventListener('click',()=>{
    dialogPonto.close();
});




// Todo conjunto numérico (exceto ano) deve ter 2 dígitos (adicionar 0 se for menor q 10)
// Retornar dia da semana por extenso (em pt-br)

function daySemana() {
    //retornar dia da semana
    const date = new Date();
    return arrayDayWeek[date.getDay()];
}

function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function horaCompleta() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function atualizaHora() {
    horaMinSeg.textContent = horaCompleta();
}


setInterval(atualizaHora, 1000);

diaSemana.textContent = daySemana();
diaMesAno.textContent = dataCompleta();