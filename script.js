// Display a welcome message in the browser console
console.log("Welcome to John Maina's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
