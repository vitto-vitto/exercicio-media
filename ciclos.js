//FOR OF
let listadeNomes = ['Victor', 'Letícia','Isabela','Igor','Yuri','Forci','Luiz'];

// for (let i = 0; i < listadeNomes.length; i++){
//     console.log('Olá ' + listadeNomes[i])
// } => forma tradicional de escrever um for

 //********************FOR OF*************************** */
// for (listadeNomes of listadeNomes){
//     console.log(listadeNomes)
// }

//********************FOR in*************************** */
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (let valores in bart){
    console.log(bart[valores])
}
