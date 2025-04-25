document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    if (username && password) {
      window.location.href = 'index.html';
    } else {
      alert('Preencha todos os campos!');
    }
  });
  
  document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;             
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value; 
    if (nome && email && senha && confirmarSenha) {
      window.location.href = 'index.html';
    } else {
      alert('Preencha todos os campos!');
    }
  })  
  document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (username === '' || password === '') {
      errorMsg.textContent = 'Por favor, preencha todos os campos antes de continuar.';
    } else {
      errorMsg.textContent = '';
      window.location.href = 'index.html';
    }
  });
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
   
   
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
   
   
    localStorage.setItem("usuarioCadastro", JSON.stringify(usuario));
   
    alert("Cadastro realizado com sucesso!");
   
    window.location.href = "login.html";
   
   
  }
