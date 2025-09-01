  // API falsa com dados simulados
    const fakeAPI = {
      "ABC123": {
        status: "Saiu para entrega",
        estimatedDelivery: "31/08/2025",
        currentLocation: "Centro de Distribuição - São Paulo/SP",
        history: [
          { date: "28/08", description: "Pedido enviado" },
          { date: "29/08", description: "Em trânsito para São Paulo" },
          { date: "30/08", description: "Chegou no centro de distribuição" },
          { date: "31/08", description: "Saiu para entrega" }
        ]
      },
      "XYZ789": {
        status: "Em trânsito",
        estimatedDelivery: "02/09/2025",
        currentLocation: "Correios - Rio de Janeiro/RJ",
        history: [
          { date: "27/08", description: "Pedido processado" },
          { date: "28/08", description: "Saiu do centro de origem" },
          { date: "29/08", description: "Em trânsito para o destino" }
        ]
      }
    };

    // Função para simular a requisição da API
    async function fetchFakeTracking(code) {
      await new Promise(resolve => setTimeout(resolve, 500)); // CARREGAMENTO
      if (fakeAPI[code]) return fakeAPI[code];
      throw new Error("Código de rastreio não encontrado."); // mensagem de erro 
    }

    // Função para buscar rastreio
    async function trackOrder() {
      const code = document.getElementById("tracking-code").value.trim().toUpperCase();
      const resultDiv = document.getElementById("tracking-result");

      if (!code) {
        resultDiv.innerHTML = `<div class="alert alert-warning">❗ Por favor, insira um código de rastreio.</div>`;
        return;
      }

      resultDiv.innerHTML = `<div class="text-center">⏳ Buscando informações...</div>`;

      try {
        const data = await fetchFakeTracking(code);

        resultDiv.innerHTML = `
          <div class="card mt-3">
            <div class="card-body">
              <h5>Status Atual: <span class="badge bg-success">${data.status}</span></h5>
              <p><strong>Previsão de entrega:</strong> ${data.estimatedDelivery}</p>
              <p><strong>Local Atual:</strong> ${data.currentLocation}</p>
              <hr>
              <h6>📜 Histórico:</h6>
              <ul class="list-group">
                ${data.history.map(h => `<li class="list-group-item">${h.date} - ${h.description}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      } catch (err) {
        resultDiv.innerHTML = `<div class="alert alert-danger">❌ ${err.message}</div>`;
      }
    }