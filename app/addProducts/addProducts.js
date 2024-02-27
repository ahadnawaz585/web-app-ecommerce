const form = document.getElementById('productForm');
let id;

form.addEventListener('submit', submitForm);

document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
});

function submitForm(event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
        const product = getProductData();
        saveProduct(product);
        resetForm();
        disableSubmitButton();
        showSnackbar();
        loadProducts();
        setTimeout(() => {
            reloadWindow(); 
        }, 2000);

    } else {
        alert('Please fill out all required fields before submitting.');
    }
}

function validateForm() {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.validity.valid || input.value.trim() === '') {
            isValid = false;
        }
    });

    return isValid;
}

function getProductData() {
    return {
        name: getInputValue('productName'),
        category: getInputValue('productCategory'),
        description: getInputValue('productDescription'),
        company: getInputValue('productCompany'),
        photo: getInputValue('productPhoto'),
        price: getInputValue('productPrice'),
        condition: getInputValue('productCondition'),
        location: getInputValue('productLocation'),
        email: getInputValue('productEmail'),
        phone: getInputValue('productPhone'),
    };
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function saveProduct(product) {
    let products = getExistingProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function getExistingProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

function loadProducts() {
    const products = getExistingProducts();
}

function resetForm() {
    form.reset();
}

function disableSubmitButton() {
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
}

function showSnackbar() {
    const snackbar = document.getElementById('snackbar');
    snackbar.classList.remove('hidden');
    setTimeout(() => {
        snackbar.classList.add('hidden');
    }, 3000);
}

function reloadWindow() {
    window.location.reload();
}

