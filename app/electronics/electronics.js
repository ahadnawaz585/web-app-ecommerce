products = JSON.parse(localStorage.getItem('products')) || [];
electronics = products.filter(product => product.category === 'electronics');

const electronicsProductsContainer = document.getElementById('electronicsProducts');

if (electronics.length > 0) {
    electronics.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('products');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');

    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('cards-img');

    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = product.photo || 'default_image_url';
    productImage.alt = product.name || 'Product Name';

    const cardDetailsDiv = document.createElement('div');
    cardDetailsDiv.classList.add('cards-details');

    const productName = document.createElement('h2');
    productName.textContent = product.name || 'Product Name';

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price || 'N/A'}`;

    const brand = document.createElement('p');
    brand.textContent = `Brand: ${product.company || 'N/A'}`;

    const category = document.createElement('p');
    category.textContent = `Category: ${product.category || 'N/A'}`;

    const description = document.createElement('p');
    description.textContent = `Description: ${product.description || 'N/A'}`;

    const condition = document.createElement('p');
    condition.textContent = `Condition: ${product.condition || 'N/A'}`;

    const number = document.createElement('p');
    number.textContent = `Number: ${product.number || 'N/A'}`;

    cardImgDiv.appendChild(productImage);
    cardDiv.appendChild(cardImgDiv);

    cardDetailsDiv.appendChild(productName);
    cardDetailsDiv.appendChild(price);
    cardDetailsDiv.appendChild(brand);
    cardDetailsDiv.appendChild(category);
    cardDetailsDiv.appendChild(description);
    cardDetailsDiv.appendChild(condition);
    cardDetailsDiv.appendChild(number);
    cardDiv.appendChild(cardDetailsDiv);

    productDiv.appendChild(cardDiv);

    electronicsProductsContainer.appendChild(productDiv);

    productDiv.addEventListener('click', () => {
      displayProductDetails(product);
    });
  });
} else {
    electronicsProductsContainer.innerHTML = '<p>No mobile Accessories products found.</p>';
}

function displayProductDetails(product) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const productName = document.createElement('h2');
  productName.textContent = product.name || 'Product Name';

  const price = document.createElement('p');
  price.textContent = `Price: $${product.price || 'N/A'}`;

  const brand = document.createElement('p');
  brand.textContent = `Brand: ${product.company || 'N/A'}`;

  const category = document.createElement('p');
  category.textContent = `Category: ${product.category || 'N/A'}`;

  const description = document.createElement('p');
  description.textContent = `Description: ${product.description || 'N/A'}`;

  const condition = document.createElement('p');
  condition.textContent = `Condition: ${product.condition || 'N/A'}`;


  modal.appendChild(productName);
  modal.appendChild(price);
  modal.appendChild(brand);
  modal.appendChild(category);
  modal.appendChild(description);
  modal.appendChild(condition);

  document.body.appendChild(modal);

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.remove();
    }
  });
}
