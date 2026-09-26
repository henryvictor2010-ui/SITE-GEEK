
    function switchPayment(method, evt) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.payment-method-content').forEach(content => content.classList.remove('active'));

      if (evt && evt.target) {
        evt.target.classList.add('active');
      }
      document.getElementById(`payment-${method}`).classList.add('active');
    }

    function loadOrderSummary() {
      const cart = JSON.parse(localStorage.getItem('my_geek_cart')) || [];
      const cartSummary = JSON.parse(localStorage.getItem('my_geek_cart_summary')) || {
        shipping: 0,
        discount: 0
      };

      const itemsContainer = document.getElementById('orderItemsContainer');
      const subtotalEl = document.getElementById('checkoutSubtotal');
      const shippingEl = document.getElementById('checkoutShipping');
      const discountRow = document.getElementById('checkoutDiscountRow');
      const discountEl = document.getElementById('checkoutDiscount');
      const totalEl = document.getElementById('checkoutTotal');

      if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px;">Seu carrinho está vazio.</p>';
        subtotalEl.innerText = 'R$ 0,00';
        shippingEl.innerText = 'R$ 0,00';
        discountRow.style.display = 'none';
        totalEl.innerText = 'R$ 0,00';
        return;
      }

      let subtotal = 0;
      itemsContainer.innerHTML = '';

      cart.forEach(item => {
        subtotal += item.price * item.quantity;
        itemsContainer.innerHTML += `
          <div class="order-item-mini">
            <img src="${item.img}" alt="${item.title}">
            <div class="order-item-details">
              <h5>${item.title}</h5>
              <span>Qtd: ${item.quantity} | R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        `;
      });

      const shipping = Number(cartSummary.shipping) || 0;
      const discount = Number(cartSummary.discount) || 0;
      const total = Math.max(0, subtotal + shipping - discount);

      subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
      shippingEl.innerText = shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2).replace('.', ',')}`;

      if (discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.innerText = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
      } else {
        discountRow.style.display = 'none';
      }

      totalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    function processOrder() {
      const cart = JSON.parse(localStorage.getItem('my_geek_cart')) || [];
      if (cart.length === 0) {
        alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
        return;
      }

      const name = document.getElementById('fullName').value;
      if (!name) {
        alert("Por favor, preencha os dados de entrega obrigatórios.");
        return;
      }

      alert("🎉 Pedido realizado com sucesso! Obrigado pela compra na Loja Geek.");
      
      localStorage.removeItem('my_geek_cart');
      localStorage.removeItem('my_geek_shipping');
      localStorage.removeItem('my_geek_coupon');
      localStorage.removeItem('my_geek_cart_summary');
      
      window.location.href = "index.html";
    }

    loadOrderSummary();
