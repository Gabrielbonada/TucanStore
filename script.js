let cart = [];

// Atualiza o conteúdo do modal do carrinho
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
      <div class="cart-item">
        <div class="cart-item-info">
          <img src="${item.image || 'https://via.placeholder.com/60'}" class="cart-item-img" alt="${item.name}">
          <div class="cart-item-details">
            <span class="cart-item-title">${item.name}</span>
            <span class="cart-item-price">R$ ${item.price.toFixed(2)}</span>
          </div>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${index})">Remover</button>
      </div>
    `;

    cartItemsContainer.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

// Adiciona item ao carrinho
function addToCart(name, price, image = "") {
  cart.push({ name, price: parseFloat(price), image });
  updateCartDisplay();
}

// Remove item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Abre o modal do carrinho
function openCart() {
  const modal = new bootstrap.Modal(document.getElementById('cartModal'));
  modal.show();
}

// Evento para cada botão de "Comprar Agora"
document.querySelectorAll(".btn-buy").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");
    const image = button.getAttribute("data-image"); // opcional

    addToCart(name, price, image);
  });
});

