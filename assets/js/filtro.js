document.querySelector("#filtrar_pendentes").addEventListener("click", () => {
    let atividadesFiltradas = atividades.filter(atividade => !atividade.concluida)
    filtrar(atividadesFiltradas)
})
document.querySelector("#filtrar_concluidas").addEventListener("click", () => {
    let atividadesFiltradas = atividades.filter(atividade => atividade.concluida)
    filtrar(atividadesFiltradas)
})
document.querySelector("#limpar_filtro").addEventListener("click", () => {
    
    atualizar()
})

