document.addEventListener('DOMContentLoaded', () => {
    // Menu Filtering
    const tabs = document.querySelectorAll('.menu-tab');
    const items = document.querySelectorAll('.menu-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    // Optional: Add fade-in animation
                    item.style.animation = 'fadeIn 0.5s ease-out forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(18, 18, 18, 1)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'rgba(18, 18, 18, 0.95)';
            header.style.padding = '1.5rem 0';
        }
    });
});
