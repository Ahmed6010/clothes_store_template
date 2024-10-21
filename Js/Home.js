
let items = document.querySelectorAll('#slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function(){
  itemActive = (itemActive + 1) % countItem;
  showSlider();
}

//event prev click
prev.onclick = function(){
  itemActive = (itemActive - 1 + countItem) % countItem;
  showSlider();
}

let refreshInterval = setInterval(() => {
  next.click();
}, 10000)

const showSlider = () => {
  // remove item active old
  let itemActiveOld = document.querySelector('#slider .list .item.active');
  itemActiveOld.classList.remove('active');

  // active new item
  items[itemActive].classList.add('active');

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
      next.click();
  }, 10000)
}




$(document).ready(function(){
  $('.lazy-slider').slick({
    lazyLoad: 'ondemand', 
    infinite: false,       
    slidesToShow: 4,      
    slidesToScroll: 1,    
    dots: false,          
    arrows: true,        
    nextArrow: '<button type="button" class="slick-next"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,    
        }
      }
    ],
  });
});




// --- search icon ---
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




// --- Login-signup icon ---
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




// --- shopping cart icon ---
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




// navbar scroll behavior
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




// --- burger menu ---
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



// swiper slider shows in responsive mode
const swiper = new Swiper('.swiper', {
  effect: "coverflow",
  lazy: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // loop: true,
});