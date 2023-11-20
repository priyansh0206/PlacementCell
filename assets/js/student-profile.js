const searchInput = document.getElementById('search-button');
searchInput.addEventListener('click', filterAccordions);


function filterAccordions() {
    const searchInput = document.getElementById('search-student');
    const accordions = document.querySelectorAll('.accordion-item');

    const searchTerm = searchInput.value.trim().toLowerCase();

    accordions.forEach(accordion => {
        const studentName = accordion.getAttribute('data-student-name');

        if (studentName.includes(searchTerm)) {
            accordion.style.display = 'block';
        } else {
            accordion.style.display = 'none';
        }
    });
}