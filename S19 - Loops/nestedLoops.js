for (let i = 1; i <= 5; i++) {
  console.log(`i is: ${i}`);

  for (let j = 1; j <= 3; j++) {
    console.log(`   j is: ${j}`);
    for (let k = 1; k <= 1; k++) {
      console.log(`       k is: ${k}`);
    }
  }
}

const seatingChart = [
  ["Ana", "Bruno", "Carla"],
  ["Daniel", "Eduarda", "Felipe", "Gabriela"],
  ["Henrique", "Isabela", "João", "Larissa"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row:${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
