// JavaScript for toggling the mobile navbar dropdown
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

  mobileToggleBtn.addEventListener("click", function () {
    mobileNavDropdown.classList.toggle("show");
    mobileToggleBtn.classList.toggle("cross");
  });
});

//////////////////////////////////////////////////////////////////////////////////////

// Function for Resetting Mobile Input 
function closeMobileSearch() {
  const mobileSearchInput = document.querySelector(".mobile-search-box input");

  // Clear input value
  if (mobileSearchInput) {
    mobileSearchInput.value = "";
  }
}

// Event listener for closing mobile search
const mobileCloseBtn = document.getElementById("mobile-close-btn");
if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener("click", closeMobileSearch);
}

//////////////////////////////////////////////////////////////////////////////////////

function navSearchBar () {
  // Select elements
const allLiElements = document.getElementsByTagName('li');
const expandSearchInput = document.getElementById("expand-search-box");
const closeSearchButton = document.getElementById("close-btn");

// Expand function
function expandSearch() {
  expandSearchInput.classList.add("search-box-expand");
  closeSearchButton.classList.remove("cancel-btn");

  // Check if the screen width is 1340 pixels or below
  if (window.innerWidth <= 1340) {
    const inputElement = expandSearchInput.querySelector('input');
    if (inputElement) {
      inputElement.classList.remove('hide-input');
    }
  }

  // Hide list items
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.add('hide');
  }
}

// Event listener for expanding search
expandSearchInput.addEventListener("click", function(event) {
  // Check if the click target is not the close button
  if (!event.target.closest('#close-btn')) {
    expandSearch();
  }
});

// Close function
function closeSearch() {
  expandSearchInput.classList.remove("search-box-expand");
  closeSearchButton.classList.add("cancel-btn");

  // Show list items
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].classList.remove('hide');
  }

  // Hide input and clear its value
  const inputElement = expandSearchInput.querySelector('input');
  if (inputElement) {
    inputElement.classList.add('hide-input');
    inputElement.value = '';
  }
}


// Event listener for closing search
closeSearchButton.addEventListener("click", closeSearch);
}
navSearchBar();