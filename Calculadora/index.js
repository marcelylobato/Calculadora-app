function calcular(operacao) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, insira dois números válidos!");
      return;
  }

  switch (operacao) {
      case '+':
          resultado = num1 + num2;
          break;
      case '-':
          resultado = num1 - num2;
          break;
      case '*':
          resultado = num1 * num2;
          break;
      case '/':
          if (num2 === 0) {
              alert("Não é possível dividir por zero!");
              return;
          }
          resultado = num1 / num2;
          break;
      default:
          resultado = "Operação inválida!";
  }

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
