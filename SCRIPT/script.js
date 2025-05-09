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
  }); 
  document.getElementById('reservaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nomeCompleto = document.querySelector('input[type="text"]').value;
    const dataNascimento = document.querySelector('input[type="date"]').value;
    const telefone = document.querySelector('input[type="tel"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const tipoQuarto = document.querySelector('select').value;
    const qtdeAdultosCrianca = document.querySelector('select').value;
    const checkIn = document.querySelector('input[type="date"]').value;
    const checkOut = document.querySelector('input[type="date"]').value;
    const preferenciasPedidos = document.querySelector('input[type="text"]').value;
    if (nomeCompleto && dataNascimento && telefone && email && tipoQuarto && qtdeAdultosCrianca && checkIn && checkOut && preferenciasPedidos) {
      window.location.href = 'index.html';
    } else {
      alert('Preencha todos os campos!');
    }
    
  });
  function validarReserva() {
    const nomeCompleto = document.querySelector('input[type="text"]').value;
    const dataNascimento = document.querySelector('input[type="date"]').value;
    const telefone = document.querySelector('input[type="tel"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const tipoQuarto = document.querySelector('select').value;
    const qtdeAdultosCrianca = document.querySelector('select').value;
    const checkIn = document.querySelector('input[type="date"]').value;
    const checkOut = document.querySelector('input[type="date"]').value;
    const preferenciasPedidos = document.querySelector('input[type="text"]').value;
    if (!nomeCompleto || !dataNascimento || !telefone || !email || !tipoQuarto || !qtdeAdultosCrianca || !checkIn || !checkOut || !preferenciasPedidos) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Reserva realizada com sucesso!");
    window.location.href = "index.html";
  }
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

