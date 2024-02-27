const postsContainer = document.getElementById('postsContainer');
  const posts = JSON.parse(localStorage.getItem('products')) || [];
  const totalPosts = document.getElementById('totalPosts');
  const searchInput = document.getElementById('searchInput');
  const sortPosts = document.getElementById('sortPosts');

  if (posts.length > 0) {
    displayPosts(posts);
  } else {
    postsContainer.innerHTML = '<p>No posts found.</p>';
  }

  updateTotalPosts();

  searchInput.addEventListener('input', filterPosts);
  sortPosts.addEventListener('change', sortPostsBy);
  
  function displayPosts(posts) {
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deletePost(post.id));

      const productDetailsDiv = document.createElement('div');
      productDetailsDiv.classList.add('product-details');

      const productImg = document.createElement('img');
      productImg.classList.add('product-img');
      productImg.src = post.photo || 'default_image_url'; 
      productImg.alt = post.name || 'Product Image';

      const productInfoDiv = document.createElement('div');
      productInfoDiv.innerHTML = `
        <h2>${post.name || 'Product Name'}</h2>
        <p>Price: $${post.price || 'N/A'}</p>
        <p>Category: ${post.category || 'N/A'}</p>
        <p>Company: ${post.company || 'N/A'}</p>
        <p>Condition: ${post.condition || 'N/A'}</p>
        <p>Description: ${post.description || 'N/A'}</p>
        <p>Email: ${post.email || 'N/A'}</p>
        <p>Location: ${post.location || 'N/A'}</p>
        <p>Phone: ${post.phone || 'N/A'}</p>
        <!-- Add more details as needed -->
      `;

      productDetailsDiv.appendChild(productImg);
      productDetailsDiv.appendChild(productInfoDiv);
      postDiv.appendChild(productDetailsDiv);
      postDiv.appendChild(deleteBtn);
      postsContainer.appendChild(postDiv);
    });
  }

  function deletePost(index) {
    posts.splice(index, 1); 
    localStorage.setItem('products', JSON.stringify(posts));
    postsContainer.innerHTML = '';
    if (posts.length > 0) {
      displayPosts(posts);
    } else {
      postsContainer.innerHTML = '<p>No posts found.</p>';
    }
    updateTotalPosts(); 
  }
  
  
  function sortPostsBy() {
    postsContainer.innerHTML='';
    const sortBy = sortPosts.value;
    if (sortBy === 'name') {
      posts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      posts.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    displayPosts(posts);
  }

  function updateTotalPosts() {
    totalPosts.textContent = posts.length;
  }

  function filterPosts() {
    postsContainer.innerHTML='';
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = posts.filter(post => {
      const searchFields = [
        post.name.toLowerCase(),
        post.category.toLowerCase(),
        post.company.toLowerCase(),
        post.condition.toLowerCase(),
        post.description.toLowerCase(),
        post.email.toLowerCase(),
        post.location.toLowerCase(),
        post.phone.toLowerCase(),
      ];
  
      return searchFields.some((field) => field.includes(searchTerm));
    });
  
    displayPosts(filteredPosts);
    updateTotalPosts();
  }

  deleteBtn.addEventListener('click', () => deletePost(index));

  