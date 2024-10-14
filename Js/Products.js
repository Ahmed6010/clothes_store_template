
// --- search icon -------------
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





// Change the number of grid columns ------------
document.getElementById('columns').addEventListener('change', function() {
  const columns = this.value;
  columns == 3 ? updateProductItemWidth('30%') : updateProductItemWidth('25%')

});


const updateProductItemWidth = (newWidth) => {
  const productItems = document.querySelectorAll('.product-item');
  productItems.forEach(item => {
    item.style.width = newWidth;
  });
}




// toggle filters title
document.querySelectorAll('.toggle-div').forEach(title => {
  title.addEventListener('click', function() {
    const parent = this.parentElement;
    
    // Toggle the active class
    parent.classList.toggle('active');

    // Toggle the icon from + to -
    const icon = this.querySelector('.toggle-icon');
    icon.classList.toggle('opened');
  });
});



// Function to check if the label text is overflowing its container
function checkLabelOverflow() {
  const radioLabels = document.querySelectorAll('.radio-label');

  radioLabels.forEach(label => {
    const container = label.parentElement;
    
    if (label.scrollWidth > container.clientWidth) {
      label.classList.add('scroll');
    } else {
      label.classList.remove('scroll');
    }
  });
}

checkLabelOverflow();
window.addEventListener('resize', checkLabelOverflow);



// input range (min - max) function
document.addEventListener('DOMContentLoaded', () => {
  const minPriceRange = document.getElementById('min-price');
  const maxPriceRange = document.getElementById('max-price');
  const minValueDisplay = document.getElementById('min-value');
  const maxValueDisplay = document.getElementById('max-value');
  const sliderTrack = document.querySelector('.slider-track');

  // Initialize displayed values
  minValueDisplay.textContent = minPriceRange.value;
  maxValueDisplay.textContent = maxPriceRange.value;

  // Function to update the slider track based on min/max values
  function updateSliderTrack() {
    const min = parseInt(minPriceRange.value);
    const max = parseInt(maxPriceRange.value);

    // Update displayed values
    minValueDisplay.textContent = min;
    maxValueDisplay.textContent = max;

    // Calculate percentage positions for the track's gradient
    const minPercent = (min / minPriceRange.max) * 100;
    const maxPercent = (max / maxPriceRange.max) * 100;

    // Apply background to show active range between the two sliders
    sliderTrack.style.background = `linear-gradient(to right, #dddddd ${minPercent}%, #d0473e ${minPercent}%, #d0473e ${maxPercent}%, #dddddd ${maxPercent}%)`;
  }

  // Event listeners to update track and values when sliders change
  minPriceRange.addEventListener('input', () => {
    if (parseInt(minPriceRange.value) > parseInt(maxPriceRange.value)) {
      minPriceRange.value = maxPriceRange.value; // Prevent overlapping
    }
    updateSliderTrack(); // Update the track
  });

  maxPriceRange.addEventListener('input', () => {
    if (parseInt(maxPriceRange.value) < parseInt(minPriceRange.value)) {
      maxPriceRange.value = minPriceRange.value; // Prevent overlapping
    }
    updateSliderTrack(); // Update the track
  });
  
  // Initial track update when the page loads
  updateSliderTrack();
});



// // Price Range filter display
// const minPriceRange = document.getElementById('min-price');
// const maxPriceRange = document.getElementById('max-price');
// const minValueDisplay = document.getElementById('min-value');
// const maxValueDisplay = document.getElementById('max-value');
// const sliderTrack = document.querySelector('.slider-track');

// // Set initial values for display
// minValueDisplay.textContent = minPriceRange.value;
// maxValueDisplay.textContent = maxPriceRange.value;

// // Update the visual slider track between the two thumbs
// function updateSliderTrack() {
//   const min = parseInt(minPriceRange.value);
//   const max = parseInt(maxPriceRange.value);

//   // Update the price range display
//   minValueDisplay.textContent = min;
//   maxValueDisplay.textContent = max;

//   // Calculate positions for the colored track
//   const minPercent = (min / minPriceRange.max) * 100;
//   const maxPercent = (max / maxPriceRange.max) * 100;

//   sliderTrack.style.background = `linear-gradient(to right, #ddd ${minPercent}%, #d0473e ${minPercent}%, #d0473e ${maxPercent}%, #ddd ${maxPercent}%)`;
// }

// // Event listeners for updating the range
// minPriceRange.addEventListener('input', () => {
//   if (parseInt(minPriceRange.value) > parseInt(maxPriceRange.value)) {
//     minPriceRange.value = maxPriceRange.value; // Prevent min selector from exceeding max
//   }
//   updateSliderTrack();
// });

// maxPriceRange.addEventListener('input', () => {
//   if (parseInt(maxPriceRange.value) < parseInt(minPriceRange.value)) {
//     maxPriceRange.value = minPriceRange.value; // Prevent max selector from going below min
//   }
//   updateSliderTrack();
// });

// updateSliderTrack();
