let soma = 0;
let valor = 1;

while(valor <= 30){
    soma ++; 
    valor += soma;
}
console.log(`Resultado: ${soma + valor}`);
console.log(`Vezes somadas: ${soma}`)