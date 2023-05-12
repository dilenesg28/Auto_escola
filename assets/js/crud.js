document.querySelector("#salvar").addEventListener("click", cadastrar)

let atividades = []

window.addEventListener("load", () => {
    atividades = JSON.parse(localStorage.getItem("atividades"))
})


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
        concluida: false
    }

    if (!isValid(atividade.titulo, document.querySelector("#titulo"))) return
    if (!isValid(atividade.categoria, document.querySelector("#categoria"))) return
    if (!isValid(atividade.dataI, document.querySelector("#dataI"))) return
    atividades.push(atividade)
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
/*
function apagar(atividades) {
    atividades = tarefas.filter(tarefa => tarefa.id !== id)
    atualizar()
}
*/

function criarCard(atividade) {
    let disabled = atividade.concluida ? "disabled" : ""

    const card = `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${atividade.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">${atividade.obs}</p>
                <p class="card-text">${atividade.categoria}</p>
                <span class="badge text-bg-warning">${atividade.pontos}pt</span>
            </div>            
            </div> <!-- card footer -->
        </div> <!-- card -->
    </div> <!-- col -->
    `
    return card
}