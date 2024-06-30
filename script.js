const carneHomem = 0.5; // kg de carne por homem
const carneMulher = 0.3; // kg de carne por mulher
const carneCrianca = 0.2; // kg de carne por criança

const frangoHomem = 0.2; // kg de frango por homem
const frangoMulher = 0.2; // kg de frango por mulher
const frangoCrianca = 0.1; // kg de frango por criança

const linguicaHomem = 0.2; // kg de linguiça por homem
const linguicaMulher = 0.2; // kg de linguiça por mulher
const linguicaCrianca = 0.2; // kg de linguiça por criança

const cervejaHomem = 0.8; // litros de cerveja por homem
const cervejaMulher = 0.5; // litros de cerveja por mulher

const refrigeranteHomem = 0.3; // litros de refrigerante por homem
const refrigeranteMulher = 0.4; // litros de refrigerante por mulher
const refrigeranteCrianca = 0.2; // litros de refrigerante por criança

const seletorhomem = "homens"; 
const seletormulheres = "mulheres"; 
const seletorcriancas = "criancas"; 

document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById(seletorhomem).value) || 0;
    const mulheres = parseInt(document.getElementById(seletormulheres).value) || 0;
    const criancas = parseInt(document.getElementById(seletorcriancas).value) || 0;

    const totalCarne = (homens * carneHomem) + (mulheres * carneMulher) + (criancas * carneCrianca);
    const totalFrango = (homens * frangoHomem) + (mulheres * frangoMulher) + (criancas * frangoCrianca);
    const totalLinguica = (homens * linguicaHomem) + (mulheres * linguicaMulher) + (criancas * linguicaCrianca);
    const totalCerveja = (homens * cervejaHomem) + (mulheres * cervejaMulher);
    const totalRefrigerante = (homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (criancas * refrigeranteCrianca);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
    <div class="resultado">
        <h2>Quantidade de itens a serem comprados:</h2>
        <p>Total de Carne: ${totalCarne.toFixed(2)} kg</p>
        <p>Total de Frango: ${totalFrango.toFixed(2)} kg</p>
        <p>Total de Linguiça: ${totalLinguica.toFixed(2)} kg</p>
        <p>Total de Cerveja: ${totalCerveja.toFixed(2)} litros</p>
        <p>Total de Refrigerante: ${totalRefrigerante.toFixed(2)} litros</p>
    <
    `;
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById(seletorhomem).value=0;
    document.getElementById(seletormulheres).value=0;
    document.getElementById(seletorcriancas).value=0;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ``;
});


