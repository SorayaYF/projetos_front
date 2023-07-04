function olaMundo() {
    //var msg = 'Olá Mundo';
    //alert(msg);
    var pessoa = {
        nome: "Ana",
        peso: 56,
        altura: 1.70

    }
    var imc = pessoa.peso / pessoa.altura * pessoa.altura;

    console.log(`${pessoa.nome} tem o IMC de: ${imc}`)

    var diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', "Sábado", "Domingo"]

    console.log(diasSemana[1])
}

function dados() {
    var n1 = "1.1";
    var n2 = "1.1";
    console.log(Number(n1) + Number(n2));
}

function enviarFormulario() {
    const pessoa = {
        nome: document.getElementById("txtNome").value,
        sexo: document.querySelector('input[name="rSexo"]:checked').value,
        peso: Number(document.getElementById("txtPeso").value),
        altura: Number(document.getElementById("txtAltura").value)
    }
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura);

    let avaliacao = "";

    if (pessoa.sexo === "masculino") {
        if (imc < 20.7) {
            avaliacao = "Abaixo do peso";
        } else if (imc < 26.4) {
            avaliacao = "Peso normal";
        } else if (imc < 27.8) {
            avaliacao = "Marginalmente acima do peso";
        } else if (imc < 31.1) {
            avaliacao = "Acima do peso ideal";
        } else {
            avaliacao = "Obeso";
        }
    } else if (pessoa.sexo === "feminino") {
        if (imc < 19.1) {
            avaliacao = "Abaixo do peso";
        } else if (imc < 25.8) {
            avaliacao = "Peso normal";
        } else if (imc < 27.3) {
            avaliacao = "Marginalmente acima do peso";
        } else if (imc < 32.3) {
            avaliacao = "Acima do peso ideal";
        } else {
            avaliacao = "Obeso";
        }
    }

    const msg = `Nome: ${pessoa.nome}\nIMC: ${(imc.toFixed(2))}\nAvaliação: ${avaliacao}`;
    document.getElementById("txtDados").value = msg;
    return false;
}

