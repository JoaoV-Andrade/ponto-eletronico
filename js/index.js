const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const arrayDayWeek = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"]


const dialogPonto = document.getElementById("dialog-ponto");




navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});




const regPonto = document.getElementById("reg-Ponto");
regPonto.addEventListener('click', () => {
    dialogPonto.showModal();
});


const dialogFechar = document.getElementById("dialog-fechar");
dialogFechar.addEventListener('click',()=>{
    dialogPonto.close();
});

const btnDialogRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
btnDialogRegistrarPonto.addEventListener("click", ()=>{

    let data = dataCompleta();
    let hora = horaCompleta();
    let tipoPonto = document.getElementById("select-tipos-ponto").value;

    let ponto = {
        "data": data,
        "hora": hora,
        "tipo": tipoPonto,
        "id": 1
    }

    localStorage.setItem("registro",JSON.stringify(ponto));

    console.log(ponto);
    

    //someto o ulimo resgistro esta sendo salvo
    //como resolver isso , de modo que eu persista todos os pontos?
});

// salvar o ultimo tipo de ponto registrado pelo usuario
// fazer o select considerar o ultim ponto e selcioar, por padrao
//o proximo possivel ponto de usuário


function daySemana() {
    
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