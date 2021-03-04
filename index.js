const alunos = [
    { nome: "Ana", notas: [10, 3, 4, 7, 5] },
    { nome: "Luiz", notas: [4, 6, 7, 2, 10] },
    { nome: "Mirian", notas: [3, 5, 7, 5, 3] },
    { nome: "Felipe", notas: [8, 9, 7, 8, 9] },
    { nome: "Carolina", notas: [9, 6, 5, 6, 7] },
    { nome: "Danilo", notas: [5, 7, 4, 8, 8] },
    { nome: "Rafael", notas: [10, 9, 2, 7, 5] },
]

function media(numeros){
    const mediaAlunos = numeros.reduce((total, numero) => total + numero, 0)
    const total = mediaAlunos / numeros.length
    return total
}

const alunosComMedia = alunos.map((aluno) => {
    aluno.media = media(aluno.notas)
    return aluno
})

console.log(alunosComMedia)