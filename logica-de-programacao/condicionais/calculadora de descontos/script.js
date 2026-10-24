let valorDaCompra = prompt("informe o valor da compra R$:");
let valorComDesconto1;
let valorComDesconto2;

if (valorDaCompra > 100 && valorDaCompra <= 200) {
    valorComDesconto1 = valorDaCompra - (valorDaCompra * 10 / 100)
    alert("O total a pagar é: R$ " + valorComDesconto1)
} else if(valorDaCompra > 200) {
    valorComDesconto2 = valorDaCompra - (valorDaCompra * 20 / 100)
    alert("O total a pagar é: R$ " + valorComDesconto2)
} else {
    alert("O total a pagar é: R$ " + valorDaCompra)
}