// --- search icon -------------
const searchContainer = document.querySelector('#search');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const closeSearchIcon = document.querySelector('.close-search-icon');

// Detect when the user starts typing and keep the search input open
searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('active');
});

// Remove the active class when clicking on the #search
searchIcon.addEventListener('click', () => {
  searchIcon.classList.toggle('hidden')
  closeSearchIcon.classList.toggle('hidden')
  searchContainer.classList.add('active')
  // searchContainer.classList.contains('active') ? searchContainer.classList.remove('active') : searchContainer.classList.add('active')
});

// change search icon to close ( X ) 
closeSearchIcon.addEventListener('click', () => {
  closeSearchIcon.classList.toggle('hidden')
  searchIcon.classList.toggle('hidden')
  searchContainer.classList.remove('active')
})


// --- Login-signup icon -----------------
const loginIcon = document.getElementById('login')
const popup = document.getElementById('popup');

// Toggle the visibility of the popup
loginIcon.addEventListener('click', () => {
    popup.classList.toggle('hidden');
});

// Close the popup if clicked outside
window.addEventListener('click', (event) => {
  if (!loginIcon.contains(event.target) && !popup.contains(event.target)) {
      popup.classList.add('hidden');
  }
});




// --- shopping cart icon ------------------
const shoppingCartIcon = document.getElementById('shopping-cart');
const cartPanel = document.getElementById('cart-panel');
const closeIcon = document.querySelector('.cart-header .close-icon');

// Open the cart panel (slide in from right)
shoppingCartIcon.addEventListener('click', () => {
  cartPanel.classList.remove('hidden');
  setTimeout(() => {
    cartPanel.classList.add('open'); 
  }, 100); 
});

// Close the cart panel (slide out to right)
closeIcon.addEventListener('click', () => {
  cartPanel.classList.remove('open'); 
  setTimeout(() => {
    cartPanel.classList.add('hidden'); 
  }, 500); 
});




// navbar scroll behavior ----------------------
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  // Scroll down
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-6.25rem'; 
  } 
  // Scroll up
  else {
    navbar.style.top = '0'; 
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});





// --- burger menu ----------------
const burgerMenuIcon = document.getElementById('menu-icon');
const menuPanel = document.getElementById('menu-panel');
const closeIcon2 = document.querySelector('#menu-close-icon');

burgerMenuIcon.addEventListener('click', () => {
  // Open the menu panel (slide in from right)
  menuPanel.classList.remove('hidden');
  setTimeout(() => {
    menuPanel.classList.add('open'); 
  }, 100); 
});

closeIcon2.addEventListener('click', () => {
  // Close the menu panel (slide out to right)
  menuPanel.classList.remove('open'); 
  setTimeout(() => {
    menuPanel.classList.add('hidden'); 
  }, 500); 
});
