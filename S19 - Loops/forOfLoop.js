const docinhos = [
  "brigadeiro",
  "beijinho",
  "quindim",
  "doce de leite",
  "pé de moleque",
  "bicho de pé",
  "cajuzinho",
  "trufa",
  "caramelo",
  "pudim"
];
for (let i=0;i<docinhos.length;i++){
    console.log(`Todo mundo ama: ${docinhos[i]}`)
}
//for of
for (let doces of docinhos){
    console.log(doces)
}


const alunos = [
  ["Ana", "Bruno", "Carlos", "Daniela"],
  ["Eduardo", "Fernanda", "Gabriel", "Helena"],
  ["Igor", "Joana", "Kleber", "Larissa"]
];

for (let i=0; i<alunos.length;i++){ //mt codigo dificil de entender
    const row = alunos[i];
    for (let j=0;j<row.length;j++){
        console.log(row[j])
    }
}

// for of 

for (let row of alunos){
    for (let aluno of row){
        console.log(aluno)
    }
}