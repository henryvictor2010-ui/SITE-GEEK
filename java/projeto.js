

 // ==========================================
// 1. GERENCIAMENTO DE LOCALSTORAGE
// ==========================================
function getCart() {
  return JSON.parse(localStorage.getItem('my_geek_cart')) || [];
}


function saveCart(cart) {
  localStorage.setItem('my_geek_cart', JSON.stringify(cart));
  updateBadge();
}


function updateBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    cartCountEl.innerText = count;
  }
}


// ==========================================
// 2. OPERAÇÕES DO CARRINHO (REMOVER)
// ==========================================
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== String(id));
  saveCart(cart);
  renderModal();
}


// ==========================================
// 3. RENDERIZAÇÃO DO MODAL DE CARRINHO
// ==========================================
function renderModal() {
  const cart = getCart();
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
 
  if (!list || !subtotalEl) return;


  list.innerHTML = '';
  let total = 0;


  if (cart.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px 0;">Seu carrinho está vazio.</p>';
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;
      list.innerHTML += `
        <div class="cart-item" style="position: relative; display: flex; align-items: center; margin-bottom: 10px;">
          <img src="${item.img}" alt="${item.title}" style="width: 50px; margin-right: 10px;">
          <div class="cart-item-info" style="flex-grow: 1;">
            <div class="cart-item-title">${item.quantity}x ${item.title}</div>
            <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
          </div>
          <button onclick="removeFromCart('${item.id}')" style="background: #ff4d4d; color: white; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer; font-weight: bold;">X</button>
        </div>
      `;
    });
  }


  subtotalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}


// ==========================================
// 4. CONTROLE DO MODAL DE CARRINHO
// ==========================================
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const openCartBtn = document.getElementById('openCartBtn');


function openCart() {
  renderModal();
  if (cartOverlay) cartOverlay.classList.add('active');
}


function closeCart() {
  if (cartOverlay) cartOverlay.classList.remove('active');
}


if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);


if (cartOverlay) {
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });
}


// ==========================================
// 5. CARROSSEL / TROCA DE IMAGENS DOS PRODUTOS
// ==========================================
function changeImage(button, direction) {
  const gallery = button.closest('.product-gallery');
  const images = gallery.querySelectorAll('.gallery-img');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));


  if (activeIndex === -1) activeIndex = 0;


  images[activeIndex].classList.remove('active');
  activeIndex += direction;


  if (activeIndex < 0) {
    activeIndex = images.length - 1;
  } else if (activeIndex >= images.length) {
    activeIndex = 0;
  }


  images[activeIndex].classList.add('active');
}


// ==========================================
// 6. MODAL DE VARIAÇÃO DE PRODUTO
// ==========================================
const allowedIds = ['10', '12'];
let currentVarProduct = null;
let selectedVarIndex = 0;


const varModal = document.getElementById('variationModal');
const closeVarModal = document.getElementById('closeVarModal');
const varModalPreview = document.getElementById('varModalPreview');
const varModalTitle = document.getElementById('varModalTitle');
const varModalPrice = document.getElementById('varModalPrice');
const varModalOptions = document.getElementById('varModalOptions');
const confirmVarAddToCart = document.getElementById('confirmVarAddToCart');


function openVariationModal(card) {
  const images = Array.from(card.querySelectorAll('.gallery-img')).map(img => img.src);
 
  currentVarProduct = {
    id: card.getAttribute('data-id'),
    title: card.getAttribute('data-title'),
    price: parseFloat(card.getAttribute('data-price')),
    brand: card.getAttribute('data-brand'),
    seller: card.getAttribute('data-seller'),
    badge: card.getAttribute('data-badge'),
    images: images.length ? images : [card.querySelector('img').src]
  };


  selectedVarIndex = 0;
  if (varModalTitle) varModalTitle.innerText = currentVarProduct.title;
  if (varModalPrice) varModalPrice.innerText = `R$ ${currentVarProduct.price.toFixed(2).replace('.', ',')}`;
 
  renderModalOptions();
  if (varModal) varModal.style.display = 'flex';
}


function renderModalOptions() {
  if (varModalPreview) varModalPreview.src = currentVarProduct.images[selectedVarIndex];
  if (!varModalOptions) return;


  varModalOptions.innerHTML = '';


  currentVarProduct.images.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.innerText = `Opção ${index + 1}`;
    btn.style.cssText = `padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; border: 1px solid ${index === selectedVarIndex ? '#a04020' : '#ccc'}; background: ${index === selectedVarIndex ? '#a04020' : '#f9f9f9'}; color: ${index === selectedVarIndex ? '#fff' : '#333'};`;
   
    btn.addEventListener('click', () => {
      selectedVarIndex = index;
      renderModalOptions();
    });


    varModalOptions.appendChild(btn);
  });
}


if (confirmVarAddToCart) {
  confirmVarAddToCart.addEventListener('click', () => {
    if (!currentVarProduct) return;


    const itemUniqueId = `${currentVarProduct.id}_model_${selectedVarIndex + 1}`;
    const itemTitle = `${currentVarProduct.title} (Opção ${selectedVarIndex + 1})`;
    const itemImg = currentVarProduct.images[selectedVarIndex];


    let cart = getCart();
    const existingItem = cart.find(item => item.id === itemUniqueId);


    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: itemUniqueId,
        title: itemTitle,
        price: currentVarProduct.price,
        img: itemImg,
        brand: currentVarProduct.brand,
        seller: currentVarProduct.seller,
        badge: currentVarProduct.badge,
        quantity: 1
      });
    }


    saveCart(cart);
    if (varModal) varModal.style.display = 'none';
    openCart();
  });
}


function addSingleProductToCart(card) {
  const id = card.getAttribute('data-id');
  const title = card.getAttribute('data-title');
  const price = parseFloat(card.getAttribute('data-price'));
  const activeImgElement = card.querySelector('.gallery-img.active');
  const img = activeImgElement ? activeImgElement.src : card.querySelector('img').src;


  let cart = getCart();
  const existingItem = cart.find(item => item.id === id);


  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, title, price, img, quantity: 1 });
  }


  saveCart(cart);
  openCart();
}


if (closeVarModal) closeVarModal.addEventListener('click', () => varModal.style.display = 'none');
if (varModal) {
  varModal.addEventListener('click', (e) => {
    if (e.target === varModal) varModal.style.display = 'none';
  });
}


// Vincular manipulador único aos botões de Adicionar ao Carrinho
document.querySelectorAll('.btn-add-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = e.target.closest('.product-card');
    const id = card.getAttribute('data-id');


    if (allowedIds.includes(id)) {
      openVariationModal(card);
    } else {
      addSingleProductToCart(card);
    }
  });
});


// ==========================================
// 7. BARRA DE PESQUISA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-box input');
  const searchButton = document.querySelector('.search-box button');
  const productCards = document.querySelectorAll('.product-card');


  function filtrarProdutos() {
    const termo = searchInput.value.toLowerCase().trim();


    productCards.forEach(card => {
      const titulo = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
      card.style.display = titulo.includes(termo) ? 'flex' : 'none';
    });
  }


  if (searchButton) {
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      filtrarProdutos();
    });
  }


  if (searchInput) {
    searchInput.addEventListener('input', filtrarProdutos);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        filtrarProdutos();
      }
    });
  }


  // ==========================================
  // 8. MODAL DE DETALHES DO PRODUTO (CLIQUE NO CARD)
  // ==========================================
  productCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Ignora clique se for botão de imagem ou botão do carrinho
      if (
        e.target.closest('.gallery-prev') ||
        e.target.closest('.gallery-next') ||
        e.target.closest('.btn-add-cart')
      ) {
        return;
      }


      const title = card.getAttribute('data-title');
      const price = card.querySelector('.product-price')?.innerText || '';
      const seller = card.getAttribute('data-seller') || '';
      const badge = card.getAttribute('data-badge') || '';
      const activeImg = card.querySelector('.gallery-img.active') || card.querySelector('img');
      const imgSrc = activeImg ? activeImg.src : '';
      const description = card.querySelector('.product-description')?.innerText || 'Sem descrição disponível.';


      const modalTitle = document.getElementById('modal-title');
      const modalPrice = document.getElementById('modal-price');
      const modalSeller = document.getElementById('modal-seller');
      const modalBadge = document.getElementById('modal-badge');
      const modalImg = document.getElementById('modal-img');
      const modalDesc = document.getElementById('modal-description');
      const productModal = document.getElementById('product-modal');


      if (modalTitle) modalTitle.innerText = title;
      if (modalPrice) modalPrice.innerText = price;
      if (modalSeller) modalSeller.innerText = seller ? 'Vendido por: ' + seller : '';
      if (modalBadge) modalBadge.innerText = badge;
      if (modalImg) modalImg.src = imgSrc;
      if (modalDesc) modalDesc.innerText = description;


      if (productModal) productModal.style.display = 'flex';
    });
  });


  updateBadge();
});


function closeModal() {
  const productModal = document.getElementById('product-modal');
  if (productModal) productModal.style.display = 'none';
}


window.addEventListener('click', (event) => {
  const productModal = document.getElementById('product-modal');
  if (event.target === productModal) {
    closeModal();
  }
});







