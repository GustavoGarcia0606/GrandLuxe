


function validarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

   
    window.location.href = "index.html";

  }
  document.getElementById('cadastroBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
})

function validarLogin() {
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value;

    if (!nome || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    window.location.href = "index.html";
  }
  