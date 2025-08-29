
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
   const map = L.map('map').setView([-23.5505, -46.6333], 13);

    // Adiciona camada de tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let marker;

    async function buscarEndereco() {
      const endereco = document.getElementById("endereco").value;

      if (!endereco) {
        alert("Digite um endereço!");
        return;
      }

      // Usa Nominatim API para buscar coordenadas
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);

          // Centraliza o mapa
          map.setView([lat, lon], 15);

          // Adiciona marcador
          if (marker) map.removeLayer(marker);
          marker = L.marker([lat, lon]).addTo(map)
            .bindPopup(`<b>${endereco}</b>`)
            .openPopup();
        } else {
          alert("Endereço não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
      }
    }
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

// Coordenadas da TucanStore
const lat = -23.5505;
const lon = -46.6333;

// Adiciona marcador
L.marker([lat, lon]).addTo(map)
  .bindPopup("<b>TucanStore</b><br>Estamos aqui!")
  .openPopup();
  