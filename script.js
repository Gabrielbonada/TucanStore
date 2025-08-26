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
            <div class="cart-item d-flex justify-content-between align-items-center">
                <div class="cart-item-info d-flex align-items-center">
                    <img src="${item.image || 'https://via.placeholder.com/60'}" class="cart-item-img me-2" alt="${item.name}">
                    <div class="cart-item-details">
                        <span class="cart-item-title fw-bold">${item.name}</span><br>
                        <span class="cart-item-price text-success">R$ ${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">Remover</button>
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
    showCart(); 
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
}

// Mostra a tela do carrinho
function showCart() {
    const cartBody = document.getElementById("cart-body");
    const cartFooter = document.getElementById("cart-footer");

    document.getElementById("cartModalLabel").textContent = "🛒 Seu Carrinho";

    cartBody.innerHTML = `
        <ul id="cart-items" class="list-group list-group-flush"></ul>
        <div class="text-end mt-4">
            <h5 class="fw-bold">Total: R$ <span id="cart-total">0.00</span></h5>
        </div>
    `;

    cartFooter.innerHTML = `
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">🡸 Continuar Comprando</button>
        <button type="button" class="btn btn-success" id="btn-checkout">✅ Finalizar Compra</button>
    `;

    updateCartDisplay();
    document.getElementById("btn-checkout").addEventListener("click", showCheckout);
}

// Mostra a tela do checkout
function showCheckout() {
    const cartBody = document.getElementById("cart-body");
    const cartFooter = document.getElementById("cart-footer");
    const total = document.getElementById("cart-total").textContent;

    document.getElementById("cartModalLabel").textContent = "💳 Finalizar Compra";

    cartBody.innerHTML = `
        <form id="checkout-form" class="checkout-form">
            <div class="mb-3">
                <label for="name" class="form-label">Nome do destinatario</label>
                <input type="text" class="form-control" id="name" placeholder="Ex: Gabriel, Benjamin..." required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Endereço de Entrega</label>
                <input type="text" class="form-control" id="address" placeholder="Rua, número, bairro, cidade" required>
            </div>
            <div class="mb-3">
                <label for="payment" class="form-label">Forma de Pagamento</label>
                <select class="form-select" id="payment" required>
                    <option value="">Selecione...</option>
                    <option value="pix">PIX</option>
                    <option value="boleto">Boleto</option>
                    <option value="credito">Cartão de Crédito</option>
                    <option value="debito">Cartão de Débito</option>
                </select>
            </div>
            <div id="pix-container" class="text-center mt-3" style="display: none;">
                <p class="fw-bold">📲 Escaneie o QR Code para pagar com PIX:</p>
                <img id="qrcode-img" alt="QR Code PIX">
            </div>
            <div id="card-container"></div> <!-- Container do cartão de crédito será gerado dinamicamente -->
            <div class="mb-3">
                <label for="feedback" class="form-label">Feedback do Site</label>
                <input type="text" class="form-control" id="feedback" placeholder="O que podemos melhorar no site?" required>
            </div>
            <p class="fw-bold text-end">Total da Compra: R$ ${total}</p>
        </form>
    `;

    cartFooter.innerHTML = `
        <button type="button" class="btn btn-outline-secondary" onclick="showCart()">🡸 Voltar ao Carrinho</button>
        <button type="submit" form="checkout-form" class="btn btn-success">📦 Confirmar Pedido</button>
    `;
}

// Submissão do checkout
document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.id === "checkout-form") {
        alert("✅ Pedido confirmado! Obrigado pela compra.");
        const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
        modal.hide();
        cart = [];
        updateCartDisplay();
    }
});

// Botões de comprar
document.querySelectorAll(".btn-buy").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        const image = button.getAttribute("data-image");
        addToCart(name, price, image);
    });
});

// Mostra QR Code e campos do cartão de crédito
document.addEventListener("change", (e) => {
    if (e.target.id === "payment") {
        const pixContainer = document.getElementById("pix-container");
        const cardContainer = document.getElementById("card-container");

        // Limpa campos anteriores
        pixContainer.style.display = "none";
        document.getElementById("qrcode-img").src = "";
        cardContainer.innerHTML = "";

        if (e.target.value === "pix") {
            pixContainer.style.display = "block";
            const qrcodeImg = document.getElementById("qrcode-img");
            const chavePix = "gabriel@seudominio.com";
            const valor = document.getElementById("cart-total").textContent.replace(",", ".");
            const pixPayload = `PIX Gabriel R$${valor}`;
            qrcodeImg.src = `https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=${encodeURIComponent(pixPayload)}`;
        }

        if (e.target.value === "credito") {
            cardContainer.innerHTML = `
                <div class="mb-3">
                    <label for="card-number" class="form-label">Número do Cartão</label>
                    <input type="text" class="form-control" id="card-number" placeholder="0000 0000 0000 0000" required>
                </div>
                <div class="mb-3">
                    <label for="card-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="card-cvv" placeholder="123" required>
                </div>
                <div class="mb-3">
                    <label for="installments" class="form-label">Parcelamento</label>
                    <select class="form-select" id="installments" required>
                        <option value="">Selecione...</option>
                        <option value="1x">1x sem juros</option>
                        <option value="2x">2x sem juros</option>
                        <option value="3x">3x sem juros</option>
                        <option value="4x">4x sem juros</option>
                        <option value="5x">5x sem juros</option>
                        <option value="6x">6x sem juros</option>
                    </select>
                </div>
            `;
        }
    }
});
