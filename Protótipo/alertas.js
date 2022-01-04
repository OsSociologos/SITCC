function isEmpty(str) {
    return !str.trim().length;
}

function funLogin(tipo){
    var camposDeInput = document.getElementsByClassName("camposInput")
    if(isEmpty(camposDeInput[0].value) || isEmpty(camposDeInput[1].value)){
        swal({
            title:`Por favor preencha todos os campos`,
            icon:"error",
        })
    }
    else{
        window.location.href = `pagina${tipo}.html`
    }
}

function funCadastro(tipo){
    var camposDeInput = document.getElementsByClassName("camposInput")
    if(isEmpty(camposDeInput[0].value) || isEmpty(camposDeInput[1].value) || isEmpty(camposDeInput[2].value) || isEmpty(camposDeInput[3].value)){
        swal({
            title:`Por favor preencha todos os campos`,
            icon:"error",
        })
    }
    else{
        swal({
            title:`Cadastro de ${tipo} realizado com sucesso!`,
            icon:"success",
        }).then(() => {
            window.location.href = 'login.html';
        })
    }

}

function funDownload(){
    swal({
            title:"Download iniciado",
            icon:"info",
        })
}

function funSolicitacao(tipo){
    if(tipo=="certificado"){
        swal({
            title:`Sua solicitação de ${tipo} do seu TCC foi enviada para seu Orientador e para a Banca Avaliadora e será respondida em breve`,
            icon:"info",
        })
    }
    else{
        swal({
            title:`Sua solicitação de ${tipo} do seu TCC foi enviada para seu Orientador e será respondida em breve`,
            icon:"info",
        })
    }
}

function funResponderSolicitacao(tipo, linha){
    var resposta = "success"
    if(tipo == "recusada")
        resposta = "error";

    swal({
        title:`Solicitação ${tipo}`,
        icon:resposta,
    }).then(() => {
        document.getElementById(linha).remove()
    })

}

function avaliarTCC() {
    swal({
        title: "Por favor insina sua nota de 0-10:",
        content: "input",
      }).then(() => {
        swal("TCC avaliado")
     })
}

function agendarTCC(){
    swal({
        title: "Por favor insina uma data para apresentação da defesa do TCC(DD/MM/AAAA):",
        content: "input",
      }).then((value) => {
        swal(`Data de apresentação agendada para ${value}`)
     })
}


function buscar(tipo){
    var input = document.querySelector('.inputNome')
    if(tipo == 'titulo'){
        input = document.querySelector('.inputTitulo')
    }

    swal({
        title:`3 resultados encontrados para ${input.value}`,
        icon:"info",
    })
}

