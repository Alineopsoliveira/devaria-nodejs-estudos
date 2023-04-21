const readLine = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})

const minhaPrimeiraConstantString = 'Minha primeira constante';
console.log(minhaPrimeiraConstantString); 
let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;  
     console.log(`o usuario digitou: ${leituraDeCampo}`);
});
