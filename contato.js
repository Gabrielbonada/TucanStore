
  // Seleciona o formulário
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio padrão

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Aqui você poderia enviar via fetch/AJAX para um servidor
    console.log({
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem
    });

    // Mensagem de sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpa o formulário
    form.reset();
  });
