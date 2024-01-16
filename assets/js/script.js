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

