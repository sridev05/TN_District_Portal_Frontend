// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Carousel Functionality
const carousels = {};

function initCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.carousel-slides');
    const slideCount = slides.children.length;
    
    carousels[carouselId] = {
        currentSlide: 0,
        slideCount: slideCount,
        slides: slides
    };

    // Create circular dots
    const dotsContainer = document.getElementById(carouselId.replace('Carousel', 'Dots'));
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(carouselId, i);
        dotsContainer.appendChild(dot);
    }

    // Auto-slide every 4 seconds
    setInterval(() => {
        nextSlide(carouselId);
    }, 4000);
}

function nextSlide(carouselId) {
    const carousel = carousels[carouselId];
    carousel.currentSlide = (carousel.currentSlide + 1) % carousel.slideCount;
    updateCarousel(carouselId);
}

function prevSlide(carouselId) {
    const carousel = carousels[carouselId];
    carousel.currentSlide = (carousel.currentSlide - 1 + carousel.slideCount) % carousel.slideCount;
    updateCarousel(carouselId);
}

function goToSlide(carouselId, slideIndex) {
    carousels[carouselId].currentSlide = slideIndex;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
    const carousel = carousels[carouselId];
    const translateX = -carousel.currentSlide * 100;
    carousel.slides.style.transform = `translateX(${translateX}%)`;

    // Update circular dots
    const dotsContainer = document.getElementById(carouselId.replace('Carousel', 'Dots'));
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === carousel.currentSlide);
    }
}

// Table Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('tableSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const table = document.getElementById('schemesTable');
            const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.getElementsByTagName('td');
                let found = false;

                for (let j = 0; j < cells.length; j++) {
                    if (cells[j].textContent.toLowerCase().includes(searchTerm)) {
                        found = true;
                        break;
                    }
                }

                row.style.display = found ? '' : 'none';
            }
        });
    }
});

// Export to Excel Functionality
function exportToExcel() {
    const table = document.getElementById('schemesTable');
    const rows = [];
    
    // Get headers
    const headers = [];
    const headerCells = table.getElementsByTagName('th');
    for (let i = 0; i < headerCells.length; i++) {
        headers.push(headerCells[i].textContent);
    }
    rows.push(headers);

    // Get visible rows
    const bodyRows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let i = 0; i < bodyRows.length; i++) {
        if (bodyRows[i].style.display !== 'none') {
            const row = [];
            const cells = bodyRows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                row.push(cells[j].textContent);
            }
            rows.push(row);
        }
    }

    // Create CSV content
    const csvContent = rows.map(row => row.join(',')).join('\n');
    
    // Download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'government_schemes.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Print Table Functionality
function printTable() {
    const table = document.getElementById('schemesTable').outerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Government Schemes - Tamil Nadu Districts Portal</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    h1 { color: #2d5aa0; text-align: center; }
                </style>
            </head>
            <body>
                <h1>Government Schemes - Chennai District</h1>
                ${table}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCarousel('adminCarousel');
    initCarousel('tourismCarousel');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav && mobileMenuBtn && !mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileNav.classList.remove('active');
    }
});