document.addEventListener('DOMContentLoaded', function() {
    const helloElement = document.querySelector('.hello');
    helloElement.classList.add('fade-in');
});

// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
