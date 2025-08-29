const productsContainer = document.getElementById('products-container');

// Fetch da API DummyJSON
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const products = data.products;

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';

      card.innerHTML = `
        <div class="product-card">
          <img src="${product.images[0]}" alt="${product.title}" class="product-img w-100">
          <div class="p-3">
            <h5>${product.title}</h5>
            <p class="text-success fw-bold">R$ ${product.price.toFixed(2)}</p>
            <p>${product.description.substring(0, 70)}...</p>
            <button class="btn btn-success w-100">Comprar</button>
          </div>
        </div>
      `;

      productsContainer.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Erro ao carregar produtos:', err);
    productsContainer.innerHTML = '<p class="text-center text-danger">Erro ao carregar produtos.</p>';
  });
  
