let pontuacao = 0;

let febre = prompt("Tem febre? (sim/não)").toLowerCase();
let tosse = prompt("Tem tosse? (sim/não)").toLowerCase();
let cabeca = prompt("Tem dor de cabeça? (sim/não)").toLowerCase();

if (febre === "sim") {
    pontuacao = pontuacao + 1;
}

if (tosse === "sim") {
    pontuacao = pontuacao + 1;
}

if (cabeca === "sim") {
    pontuacao = pontuacao + 1;
}

if (pontuacao >= 2) {
    alert("ATENDIMENTO DE URGÊNCIA")
} else {
    alert("ATENDIMENTO NORMAL")
}