
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
      // responsive: [
      //     {
      //         breakpoint: 768, // For smaller screens, adjust slidesToShow
      //         settings: {
      //             slidesToShow: 2
      //         }
      //     },
      //     {
      //         breakpoint: 480, // For mobile screens
      //         settings: {
      //             slidesToShow: 1
      //         }
      //     }
      // ]
  });
});




// --- search icon ---
const searchContainer = document.querySelector('#search');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

// Detect when the user starts typing and keep the search input open
searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('active');
});

// Remove the active class when clicking on the #search
searchIcon.addEventListener('click', () => {
  searchContainer.classList.contains('active') ? searchContainer.classList.remove('active') : searchContainer.classList.add('active')
});




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

// //  Toggle the Burger Menu
// document.getElementById("burger-menu").addEventListener("click", function() {
//   const navItems = document.getElementById("nav-items");
//   navItems.classList.toggle("show");
// });



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

// let menuBtn = document.querySelector('#burger-menu');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// })


const burgerMenuIcon = document.getElementById('menu-icon');
const menuPanel = document.getElementById('menu-panel');
const closeIcon2 = document.querySelector('#menu-close-icon');


// Open the cart panel (slide in from left)

// Open the cart panel (slide in from right)
burgerMenuIcon.addEventListener('click', () => {
  menuPanel.classList.remove('hidden');
  setTimeout(() => {
    menuPanel.classList.add('open'); 
  }, 100); 
});

// Close the cart panel (slide out to right)
closeIcon2.addEventListener('click', () => {
  menuPanel.classList.remove('open'); 
  setTimeout(() => {
    menuPanel.classList.add('hidden'); 
  }, 500); 
});

// Close the cart panel (slide out to left)
// burgerMenuIcon.addEventListener('click', () => {
//   menuPanel.classList.remove('open'); 
//   setTimeout(() => {
//     menuPanel.classList.add('hidden'); 
//   }, 500); 
// });