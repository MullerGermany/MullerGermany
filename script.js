// Muestra/oculta el submenú de productos y las categorías
function toggleSubMenu(categoriaId) {
    var subMenu = document.getElementById('sub-menu-productos');
    var categorias = document.querySelectorAll('.categoria');

    // Oculta todas las categorías al principio
    categorias.forEach(function(categoria) {
        categoria.classList.add('hidden');
    });

    // Muestra la categoría seleccionada
    var categoriaMostrar = document.getElementById(categoriaId);
    if (categoriaMostrar) {
        categoriaMostrar.classList.remove('hidden');
    }

    // Muestra/oculta el submenú de productos
    subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';
}

// Asigna la función al clic del elemento "Productos"
document.getElementById('menu-principal').getElementsByTagName('a')[2].addEventListener('click', function() {
    toggleSubMenu('categoria1'); // Cambia 'categoria1' por el ID de la categoría que deseas mostrar por defecto
});

// Manejador de clics en el documento para ocultar el submenú
document.addEventListener('click', function(event) {
    var subMenu = document.getElementById('sub-menu-productos');
    var targetElement = event.target; // Elemento que recibió el clic

    // Verifica si el clic no está dentro del menú principal ni del submenú
    if (!targetElement.closest('#menu-principal') && !targetElement.closest('#sub-menu-productos')) {
        subMenu.style.display = 'none';
    }
});

// Mostrar la categoría seleccionada y oculta las demás
function mostrarCategoria(categoriaId) {
    var categorias = document.querySelectorAll('.categoria');

    // Oculta todas las categorías
    categorias.forEach(function(categoria) {
        categoria.classList.add('hidden');
    });

    // Muestra la categoría seleccionada
    var categoriaMostrar = document.getElementById(categoriaId);
    if (categoriaMostrar) {
        categoriaMostrar.classList.remove('hidden');
    }
}

// Mostrar el submenú de productos y manejar la selección de categorías
function toggleSubMenu() {
    var subMenu = document.getElementById('sub-menu-productos');
    var categorias = document.querySelectorAll('.categoria');

    // Muestra/oculta el submenú de productos
    subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';

    // Asigna el manejo de clics a las opciones del submenú de productos
    subMenu.addEventListener('click', function(event) {
        var targetCategoriaId = event.target.getAttribute('data-categoria-id');
        if (targetCategoriaId) {
            mostrarCategoria(targetCategoriaId);
        }
    });
}

// Asigna la función al clic del elemento "Productos"
document.getElementById('menu-principal').getElementsByTagName('a')[2].addEventListener('click', toggleSubMenu);

// Manejador de clics en el documento para ocultar el submenú
document.addEventListener('click', function(event) {
    var subMenu = document.getElementById('sub-menu-productos');
    var targetElement = event.target; // Elemento que recibió el clic

    // Verifica si el clic no está dentro del menú principal ni del submenú
    if (!targetElement.closest('#menu-principal') && !targetElement.closest('#sub-menu-productos')) {
        subMenu.style.display = 'none';
    }
});

// Obtener todas las imágenes de productos
var imagenesProductos = document.querySelectorAll('.categoria .generador img');

// Agregar un listener de clic a cada imagen
imagenesProductos.forEach(function(imagen) {
    imagen.addEventListener('click', function() {
        // Obtener la URL de la página del producto desde el atributo "href" del enlace padre
        var urlProducto = this.closest('.generador').querySelector('a').getAttribute('href');
        
        // Redirigir al usuario a la página del producto
        window.location.href = urlProducto;
    });
});

