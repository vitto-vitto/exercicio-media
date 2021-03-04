const alunos = [
    { nome: "Ana", notas: [10, 3, 4, 7, 5] },
    { nome: "Luiz", notas: [4, 6, 7, 2, 10] },
    { nome: "Mirian", notas: [3, 5, 7, 5, 3] },
    { nome: "Felipe", notas: [8, 9, 7, 8, 9] },
    { nome: "Carolina", notas: [9, 6, 5, 6, 7] },
    { nome: "Danilo", notas: [5, 7, 4, 8, 8] },
    { nome: "Rafael", notas: [10, 9, 2, 7, 5] },
  ]


  // Usando as funções de (.map, .filter, .reduce)
  // 1 - faça uma função de calculo de média 
      //adicionar a propriedade média a cada um dos objetos
      //criar função média que: recebe x valores, soma esses valores e divide pela quantidade dos mesmos
      function media(...numeros){
          const mediaAlunos = numeros.reduce((acum, num) => acum += num)/numeros.length
        return mediaAlunos
    }

    alunos.map((aluno) => {
        aluno.media = media(aluno)
    })
      //aplicar função média as notas dos objetos 
      



  // 2 - faça uma função de retorne somente os alunos com média maior que 6
  // 3 - faça uma função de adicione uma propriedade objeto aluno chamada "aprovado"
  //     a propriedade só deve ser true se a média do aluno for maior que 7
  // 4 - faça uma função que retorne a média da sala
  // 5 - faça uma função que retorne apenas os alunos com a maior média
  // 6 - faça uma função que retorne apenas os alunos com a menor média