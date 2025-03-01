const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome.value !== "" && altura.value !== "" && peso.value !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    
    let classificacao = "";

    if(valorIMC < 18.5){
        classificacao = 'abaixo do peso';
    } else if(valorIMC < 25){
     classificacao = "com peso ideal, parabéns";
    } else if(valorIMC < 30){
        classificacao = 'levemente acima do peso';
     } else if(valorIMC < 35){
        classificacao = "com obesidade grau 1";
     } else if(valorIMC < 40){
        classificacao = 'com obesidade grau 2'
     } else {
        classificacao = "com obesidade grau 3"
     }

    resultado.textContent = `${nome} , seu Imc é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = "preencha todos os campos necessários!!";
  }
}

calcular.addEventListener("click", imc);
