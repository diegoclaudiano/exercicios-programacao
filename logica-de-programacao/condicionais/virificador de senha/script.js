let senha = prompt("Digite sua senha:");

if (senha.length < 8) {
    alert("Senha fraca!")
} else if (senha.length < 12) {
    alert("Senha média")
} else {
    alert("Senha forte")
}