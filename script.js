const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
    enunciado: "Insira o enunciado da Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 3",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    }
];

const lapis = {
    tamanho: 20,
    tipo:'HB',
    cor: 'Grafite',
    temBorrachaAtras: false
}

let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
}

const caixa-perguntas = document.querySelector
(".caixa-perguntas");
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent =
}

function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        }
        mostraPergunta();