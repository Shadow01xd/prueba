
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const gameItems = Array.from(document.querySelectorAll('.game-item'));
    const sortSelect = document.getElementById('sortSelect');

    // Función para filtrar juegos por nombre
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

    // Función para ordenar juegos según el criterio seleccionado
    sortSelect.addEventListener('change', function() {
        const sortBy = sortSelect.value;
        if (sortBy === 'price') {
            gameItems.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
        } else if (sortBy === 'popularity') {
            gameItems.sort((a, b) => parseInt(b.getAttribute('data-popularity')) - parseInt(a.getAttribute('data-popularity')));
        }
        const gameList = document.querySelector('.game-list');
        gameItems.forEach(item => gameList.appendChild(item));
    });

    // Función para abrir modales de los juegos
    window.openGameModal = function(gameId) {
        const modal = document.getElementById(`${gameId}Modal`);
        modal.style.display = 'block';
    };

    // Función para cerrar modales de los juegos
    window.closeGameModal = function(gameId) {
        const modal = document.getElementById(`${gameId}Modal`);
        modal.style.display = 'none';
    };

    // Manejo de envío de formularios para los juegos
    document.getElementById('formDestacado').addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('reply_to_destacado').value;
        console.log('Email a enviar:', emailInput);

        const btn = document.getElementById('buttonDestacado');
        btn.value = 'Enviando...';

        emailjs.sendForm('default_service', 'template_ifwek6f', this)
            .then(() => {
                btn.value = 'Confirmar Compra';
                alert('Correo enviado!');
                closeGameModal('destacado');
                this.reset();
            }, (err) => {
                btn.value = 'Confirmar Compra';
                console.error('Error:', err);
                alert('Error: ' + JSON.stringify(err));
            });
    });

    document.getElementById('formJuego1').addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('reply_to_juego1').value;
        console.log('Email a enviar:', emailInput);

        const btn = document.getElementById('buttonJuego1');
        btn.value = 'Enviando...';

        emailjs.sendForm('default_service', 'template_ifwek6f', this)
            .then(() => {
                btn.value = 'Confirmar Compra';
                alert('Correo enviado!');
                closeGameModal('juego1');
                this.reset();
            }, (err) => {
                btn.value = 'Confirmar Compra';
                console.error('Error:', err);
                alert('Error: ' + JSON.stringify(err));
            });
    });

    document.getElementById('formJuego2').addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('reply_to_juego2').value;
        console.log('Email a enviar:', emailInput);

        const btn = document.getElementById('buttonJuego2');
        btn.value = 'Enviando...';

        emailjs.sendForm('default_service', 'template_0tnkqgs', this)
            .then(() => {
                btn.value = 'Confirmar Compra';
                alert('Correo enviado!');
                closeGameModal('juego2');
                this.reset();
            }, (err) => {
                btn.value = 'Confirmar Compra';
                console.error('Error:', err);
                alert('Error: ' + JSON.stringify(err));
            });
    });
});
