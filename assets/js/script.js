    // JavaScript for toggling the mobile navbar dropdown
    document.addEventListener("DOMContentLoaded", function () {
        const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
        const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

        mobileToggleBtn.addEventListener("click", function () {
            mobileNavDropdown.classList.toggle("show");
            mobileToggleBtn.classList.toggle("cross");
        });
    });