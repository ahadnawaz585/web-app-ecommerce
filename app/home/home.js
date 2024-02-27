
 let products = JSON.parse(localStorage.getItem('products')) || [];

let mobiles = products.filter(product => product.category === 'mobiles');

let accessories = products.filter(product => product.category === 'mobileAccessories');

let electronics = products.filter(product => product.category === 'electronics');


function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const frontFace = document.createElement('div');
  frontFace.classList.add('front');

  const productPhoto = document.createElement('img');
  productPhoto.src = product.photo;
  productPhoto.alt = product.name;
  productPhoto.style.maxHeight = '200px';

  const productName = document.createElement('h2');
  productName.textContent = product.name;

  frontFace.appendChild(productPhoto);
  frontFace.appendChild(productName);

  const backFace = document.createElement('div');
  backFace.classList.add('back');

  const productPrice = document.createElement('p');
  productPrice.textContent = `Price: $${product.price}`;

  const productDescription = document.createElement('p');
  productDescription.textContent = `Description: ${product.description}`;

  const productCompany = document.createElement('p');
  productCompany.textContent = `Company: ${product.company}`;

  backFace.appendChild(productPrice);
  backFace.appendChild(productDescription);
  backFace.appendChild(productCompany);

  cardInner.appendChild(frontFace);
  cardInner.appendChild(backFace);

  card.appendChild(cardInner);

  return card;
}

function populateCarousel(carousel, productList) {
  if (productList.length > 0) {
  productList.forEach(product => {
    const card = createProductCard(product);
    carousel.appendChild(card);
  });
}else{
  carousel.innerHTML = '<p class="status" >No products found.</p>';
}
}

function populateCarouselWithHeading(carousel, productList, headingText) {
  const heading = document.createElement('h2');
  heading.textContent = headingText;
  carousel.appendChild(heading);

  populateCarousel(carousel, productList);
}

const mobilesCarousel = document.getElementById('mobilesCarousel');
const accessoriesCarousel = document.getElementById('accessoriesCarousel');
const electronicsCarousel = document.getElementById('electronicsCarousel');

populateCarousel(mobilesCarousel, mobiles);
populateCarousel(accessoriesCarousel, accessories);
populateCarousel(electronicsCarousel, electronics);
