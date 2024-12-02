function showProduct(productId, btn) {
    // Hide all products
    const products = document.querySelectorAll('.product');
    products.forEach(product => product.classList.remove('active-product'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.patners-card');
    buttons.forEach(button => button.classList.remove('active-btn'));

    // Show the selected product and make the button active
    document.getElementById(productId).classList.add('active-product');
    btn.classList.add('active-btn');
}
