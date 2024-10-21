document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const expandableItems = document.querySelectorAll('.expandable-item');

    // Manage the active state of the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Toggle visibility of details when clicking on list items
    expandableItems.forEach(item => {
        item.addEventListener('click', function () {
            const details = this.querySelector('.details');
            
            // Toggle visibility of details on click
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });
});
