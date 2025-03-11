document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hero-section');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSection = 0;
    let isScrolling = false;

    // Handle scroll events
    window.addEventListener('wheel', function(e) {
        if (isScrolling) return;
        
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        } else if (e.deltaY < 0 && currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    });

    // Handle dot navigation clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSection = index;
            scrollToSection(currentSection);
        });
    });

    function scrollToSection(index) {
        isScrolling = true;
        
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${(i - index) * 100}%)`;
        });

        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
}); 