//IMC = peso (em kg) / altura ao quadrado (em metros)

//Menor que 18,5 - Abaixo do peso

//Entre 18,5 e 24,9 - Peso normal

//Entre 25 e 29,9 - Sobrepeso (acima do peso desejado)

//Igual ou acima de 30 - Obesidade

function calculadorImc() {

    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var paseAltura = parseFloat(altura);
    var pasePeso = parseFloat(peso);

    //console.log(paseAltura);
    //console.log(pasePeso);

    var imc = pasePeso / (paseAltura * paseAltura);

    //console.log(imc);

    //arredondamento do imc para duas casas
    var imcAredondado = imc.toFixed(2);

    categoriasIMC(nome, imcAredondado);

}


function categoriasIMC(nome, imcAredondado) {

    var resultadoFormatado;

    if (imcAredondado < 18.5) {

        resultadoFormatado = "Olá, " + nome + " seu imc é: " + imcAredondado +
        " e você está 'A baixo do peso' ";

    } else if  (imcAredondado > 18.5 && imcAredondado <= 24.9) {
        resultadoFormatado = "Olá, " + nome + " seu imc é: " + imcAredondado +
        " e você está 'no Peso normal' ";

    }else if (imcAredondado > 25 && imcAredondado <= 29.9 ) {
        resultadoFormatado = "Olá, " + nome + " seu imc é: " + imcAredondado +
        " e você está 'com sobrepeso' ";

    } else {
        resultadoFormatado = "Olá, " + nome + " seu imc é: " + imcAredondado +
        " e você está 'Obesidade' ";
    }

    apresentaResultado(resultadoFormatado);
}


function apresentaResultado(resultadoFormatado) {

    document.getElementById("resultado").value = resultadoFormatado;

}







