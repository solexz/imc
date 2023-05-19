// peso/altura * altura

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválido", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelIMC = levelIMC(imc);
  const msg = `Seu IMC é ${imc} (${nivelIMC}) `;

  setResult(msg, true);
});

function levelIMC(imc) {
  const level = [
    "Magreza",
    "Normal",
    "Sobrepeso",
    "Obesidade",
    "Obesidade Grave",
  ];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function createPara() {
  const p = document.createElement("p");
  return p;
}

function setResult(message, valid) {
  const result = document.querySelector("#result");
  const p = createPara();
  result.innerHTML = "";

  if (valid) {
    p.classList.add("result-para");
  } else {
    p.classList.add("bad-para");
  }

  p.innerHTML = message;
  result.appendChild(p);
}
