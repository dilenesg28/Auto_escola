document.querySelector("#salvar").addEventListener("click", cadastrar)

let atividades = []

window.addEventListener("load", () => {
    atividades = JSON.parse(localStorage.getItem("atividades")) || []
    atualizar()
})

function atualizar() {
    localStorage.setItem("atividades", JSON.stringify(atividades))
    document.querySelector("#atividades").innerHTML = ""
    atividades.forEach(atividade =>
        document.querySelector("#atividades").innerHTML += criarCard(atividade))

    
}


function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const dataI = document.querySelector("#dataI").value
    const categoria = document.querySelector("#categoria").value
    const obs = document.querySelector("#obs").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const atividade = { //JSON Java Script Object Notation

        titulo,
        pontos,
        dataI,
        categoria,
        obs,
        concluida: true
    }

    if (!isValid(atividade.titulo, document.querySelector("#titulo"))) return
    if (!isValid(atividade.categoria, document.querySelector("#categoria"))) return
    if (!isValid(atividade.dataI, document.querySelector("#dataI"))) return
    atividades.push(atividade)
    atualizar()   




    modal.hide()

}


function isValid(valor, campo) {
    if (valor.length == 0) {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    } else {
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }

}
function limparCard(atividade) {


   // document.querySelector("#titulo").value = ""
    //document.querySelector("#categoria").value = ""
   // document.querySelector("dataI").value = ""
   // document.querySelector("#pontos").value = "1"
   // document.querySelector("#obs").value = ""
}


function apagar(botao){
    /*botao.parentNode.parentNode.parentNode.remove()*/
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(atividade) {
    let disabled = atividade.concluida ? "disabled" : ""

    const card = `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header"  style="background-color: #4682B4;" style="font-size: medium;">
                ${atividade.titulo}
            </div>
            <div class="input-group date" data-provide="datepicker">           
                ${atividade.dataI}
            </div>
            <div class="card-body" style="background-color: #B0C4DE;"> 
                <p class="card-text">${atividade.obs}</p>                 
            </div>
            <div class="card-body" style="background-color: #B0C4DE;"> 
                <span class="badge text-bg-warning">${atividade.categoria}</span>
                <span class="badge text-bg-warning">${atividade.pontos}pt</span>
            </div>       
            <div class="card-footer" style="background: #6495ED;">
                <a href="#" class="btn btn-success" title="marcar como concluída">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div> <!-- card footer -->
        </div> <!-- card -->
    </div> <!-- col -->
    `
    return card
}