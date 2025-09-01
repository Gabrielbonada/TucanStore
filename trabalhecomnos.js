
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão

      // Captura os campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const vaga = document.getElementById("vaga").value;
      const curriculo = document.getElementById("curriculo").files[0];
      const mensagem = document.getElementById("mensagem").value.trim();

      // Validação básica
      if (!nome || !email || !vaga || !curriculo || !mensagem) {
        alert("❗ Por favor, preencha todos os campos e anexe seu currículo.");
        return;
      }

      // Simula envio (ex: você pode conectar a uma API ou e-mail)
      const dadosForm = {
        nome,
        email,
        vaga,
        mensagem,
        nomeArquivo: curriculo.name
      };

      console.log("📨 Dados enviados:", dadosForm);

      // Mensagem de sucesso
      alert("✅ Candidatura enviada com sucesso! Entraremos em contato em breve.");

      // Limpa o formulário
      form.reset();
    });
  });

