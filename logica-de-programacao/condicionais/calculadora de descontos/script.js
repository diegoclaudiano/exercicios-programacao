let valor_compra = prompt("informe o valor da compra R$:");
let desconto = 0;

if (valor_compra > 100) {
    desconto = 10
} if (valor_compra > 200) {
    desconto = 20
}

let valor_final = valor_compra - (desconto/100 * valor_compra)
alert("O total a pagar é: R$ " + valor_final)