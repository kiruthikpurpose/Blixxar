// Navigation functionality
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links and add to clicked link
        document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        
        // Hide all pages and show the selected one
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(this.dataset.page).classList.add('active');
    });
});

// Form submission demo
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (This is a demo, no actual submission occurred)');
    });
});
