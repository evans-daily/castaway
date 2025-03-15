const cart = [];
const cartModal = document.getElementById('cart-modal');
const cartButton = document.getElementById('cart-button');
const closeModal = document.getElementById('close-modal');
const cartItemsList = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');
const backToTopButton = document.getElementById('back-to-top');


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.dataset.name;
        const productPrice = productCard.dataset.price;
        
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCart();
    });
});

cartButton.addEventListener('click', () => {
    cartModal.style.display = "block";
    updateCart();
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

checkoutButton.addEventListener('click', () => {
    alert("Оформить заказ");
});

function updateCart() {
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} ₽ `;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Удалить";
        removeButton.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });
}

// Показать кнопку "Наверх" при прокрутке
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Прокрутка к верху страницы при нажатии на кнопку
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
