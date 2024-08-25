// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchLibrary');
    const gameItems = Array.from(document.querySelectorAll('.game-item'));
    const filterSelect = document.getElementById('filterSelect');

    // Filtrado de juegos en la biblioteca
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        gameItems.forEach(function(item) {
            const gameName = item.getAttribute('data-name').toLowerCase();
            if (gameName.includes(filter)) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Filtrado por categoría
    filterSelect.addEventListener('change', function() {
        const filterBy = filterSelect.value;
        gameItems.forEach(function(item) {
            let display = true;
            if (filterBy === 'installed' && item.getAttribute('data-installed') !== 'yes') {
                display = false;
            } else if (filterBy === 'favorites' && item.getAttribute('data-favorite') !== 'yes') {
                display = false;
            } else if (filterBy === 'recent' && item.getAttribute('data-recent') !== 'yes') {
                display = false;
            }
            item.style.display = display ? 'inline-block' : 'none';
        });
    });

    // Abrir modal
    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Cerrar modal
    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
