let categoriaActual = null; // Variable global para rastrear la categoría actual
let productoActual = null; // Variable global para rastrear el producto actual

// Función para mostrar las categorías y ocultar otras secciones
function mostrarCategoria(categoriaId) {
    ocultarTodo(); // Oculta todas las secciones (categorías, detalles, etc.)

    // Ocultar los detalles del producto previamente seleccionado
    if (productoActual) {
        document.getElementById('detalle-producto').classList.add('hidden');
    }

    // Mostrar solo la categoría seleccionada
    const categoria = document.getElementById(categoriaId);
    if (categoria) {
        categoria.classList.remove('hidden');
        categoriaActual = categoriaId; // Guarda la categoría activa
    }

    // Mostrar el submenú de productos
    document.getElementById('sub-menu-productos').classList.remove('hidden');
}

// Función para mostrar detalles de un producto
function mostrarInformacion(productoId) {
    ocultarTodo(); // Oculta otras secciones y el submenú

    if (detallesProductos[productoId]) {
        const producto = detallesProductos[productoId];

        // Llenar los detalles del producto
        document.getElementById('detalle-imagen').innerHTML =
        `<img id="imagen-principal"
              src="${producto.imagenes ? producto.imagenes[0] : producto.imagen}"
              alt="${producto.nombre}">`;
        document.getElementById('detalle-nombre').textContent = producto.nombre;
        document.getElementById('detalle-descripcion').textContent = producto.descripcion;

        const listaCaracteristicas = document.getElementById('detalle-caracteristicas');
        listaCaracteristicas.innerHTML = ''; // Limpiar la lista anterior
        producto.caracteristicas.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            listaCaracteristicas.appendChild(li);
        });

        // Mostrar la sección de detalles del producto
        document.getElementById('detalle-producto').classList.add('visible'); // Hacer visible el detalle
        productoActual = productoId; // Actualizar el producto actual
    } else {
        console.error(`No se encontró información para el producto con ID: ${productoId}`);
    }
}

// Función para cerrar el detalle del producto y volver a las categorías
function cerrarDetalle() {
    document.getElementById('detalle-producto').classList.remove('visible'); // Ocultar el detalle
    document.getElementById('sub-menu-productos').classList.remove('hidden'); // Mostrar submenú

    // Mostrar la última categoría activa
    if (categoriaActual) {
        document.getElementById(categoriaActual).classList.remove('hidden');
    }
}



// Función para ocultar todo (categorías, detalles y otras secciones)
function ocultarTodo() {
    // Ocultar todas las secciones principales
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');  // Asegura que todas las secciones estén ocultas
    });

    // Ocultar submenú de productos
    document.getElementById('sub-menu-productos').classList.add('hidden');
}



// Función para ocultar los detalles del producto
function ocultarDetallesProducto() {
    const detalleProducto = document.getElementById('detalle-producto');
    if (detalleProducto && !detalleProducto.classList.contains('hidden')) {
        detalleProducto.classList.add('hidden');
    }
}

// Event listener para el submenú de productos
document.querySelectorAll('#sub-menu-productos a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la recarga de la página

        ocultarDetallesProducto(); // Ocultar los detalles del producto si están visibles

        // Mostrar la categoría seleccionada
        const categoriaSeleccionadaId = event.target.getAttribute('data-categoria-id');
        mostrarCategoria(categoriaSeleccionadaId);
    });
});

// Event listener para el menú principal (header)
document.querySelectorAll('#header-menu a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la acción por defecto (navegación)

        // Ocultar los detalles del producto si están visibles
        ocultarDetallesProducto();

        // Si el enlace es "Productos", solo mostramos el submenú
        if (event.target.classList.contains('menu-productos')) {
            // Mostrar solo el submenú de productos
            document.getElementById('sub-menu-productos').classList.remove('hidden');
        } else {
            // Ocultar los detalles de productos y todo lo demás
            ocultarTodo();
        }
    });
});

// Mostrar detalles del producto cuando se hace clic en una imagen
function mostrarInformacion(idProducto) {
    // Aquí deberías definir la información para cada producto (imagen, nombre, descripción, características)
    var productos = {

        // -----------------------------------------------------------------------------------------GENERADORES
        generador1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1162.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1164.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1166.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1169.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1172.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CA/IMG_1175.jpg'
            ],

            nombre: 'Generador Amarillo',
            modelo: 'MG3500C',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
        },
        generador2: {
            imagenes:[
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1180.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1182.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1187.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1189.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1191.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1193.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_AMARILLO_MG3500CV/IMG_1197.jpg'
            ],

            nombre: 'Generador Verde',
            modelo: 'MG3500',
            //precio: 3500,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
        },

        generador3: {
            imagenes:[
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_ROJO_MG3500CR/IMG_1198.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_ROJO_MG3500CR/IMG_1200.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_ROJO_MG3500CR/IMG_1202.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_ROJO_MG3500CR/IMG_1206.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/GENERADOR_ROJO_MG3500CR/IMG_1209.jpg'
            ],


            nombre: 'Generador Rojo',
            modelo: 'MG3500C',
            //precio: 6800,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Voltaje nominal 120V/240V', 'Frecuencia nominal: 60Hz', 'Salida clasificada: 2.8 kW','Salida máxima: 3.0 kW','Tamaño: 620x465x505 mm'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
        },


        generador4: {
            imagenes:[
                'img/productos/CATALOGO NUEVO/GENERADORES/MINIGENERADOR/IMG_1117.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/MINIGENERADOR/IMG_1121.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/MINIGENERADOR/IMG_1123.jpg',
                'img/productos/CATALOGO NUEVO/GENERADORES/MINIGENERADOR/IMG_1125.jpg',
            ],


            nombre: 'Minigenerador',
            modelo: 'MG950iSM',
            //precio: 6800,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Voltaje nominal 120V/240V', 'Frecuencia nominal: 60Hz', 'Salida clasificada: 2.8 kW','Salida máxima: 3.0 kW','Tamaño: 620x465x505 mm'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
        },





        // -----------------------------------------------------------------------------------------HIDROLAVADORAS Y BOMBAS

        Hidrolavadora1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1967.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1969.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1976.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1977.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1980.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_AMARILLA/IMG_1983.jpg'
            ],

            nombre: 'Hidrolavadora Amarilla',
            modelo: 'MG180KC',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Hidrolavadora2: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_1987.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_1989.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_1995.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_1998.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_2001.jpg',
                'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/HIDROLAVADORA_ROJA/IMG_2007.jpg'
            ],

            nombre: 'Hidrolavadora Roja',
            modelo: 'MG180KC',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

            Bomba1: {
                imagenes: [
                    'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/BOMBA_AGUA-WP30R/IMG_1139.jpg',
                    'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/BOMBA_AGUA-WP30R/IMG_1141.jpg',
                    'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/BOMBA_AGUA-WP30R/IMG_1144.jpg',
                    'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/BOMBA_AGUA-WP30R/IMG_1147.jpg',
                    'img/productos/CATALOGO NUEVO/HIDROLAVADORAS Y BOMBAS/BOMBA_AGUA-WP30R/IMG_1149.jpg',
                ],
    
                nombre: 'Bomba de Agua',
                modelo: 'WP-30',
                //precio: 3700,
                descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
                caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
                //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
                linkCompra: 'https://www.example.com/comprar-generador1'
                },


        // -----------------------------------------------------------------------------------------INVERSORAS

        Inversora1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_A/IMG_0915.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_A/IMG_0917.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_A/IMG_0919.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_A/IMG_0920.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_A/IMG_0923.jpg'
            ],

            nombre: 'Inversora Azul',
            modelo: 'MMA250A',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

        Inversora2: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_R/IMG_0924.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_R/IMG_0926.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_R/IMG_0928.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_R/IMG_0931.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/INVERSORA_MMA250A_R/IMG_0932.jpg'
            ],

            nombre: 'Inversora Roja',
            modelo: 'MMA250A',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

        Motosoldadora1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/MOTOSOLDADORA_MG4000iW/IMG_1151.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/MOTOSOLDADORA_MG4000iW/IMG_1153.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/MOTOSOLDADORA_MG4000iW/IMG_1154.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/MOTOSOLDADORA_MG4000iW/IMG_1157.jpg',
                'img/productos/CATALOGO NUEVO/MOTOSOLDADORAS E INVERSORAS/MOTOSOLDADORA_MG4000iW/IMG_1159.jpg'
            ],

            nombre: 'Motosoldadora',
            modelo: 'MG4000iW',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },
    





        // -----------------------------------------------------------------------------------------ROMPEDORES
        Rompedor1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0805.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0807.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0809.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0810.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0815.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0817.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_PR/IMG_0820.jpg'
            ],

            nombre: 'Rompedor Rojo',
            modelo: '3061P',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

        Rompedor2: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0824.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0826.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0827.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0830.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0832.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0835.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061_V/IMG_0836.jpg'
            ],

            nombre: 'Rompedor Verde',
            modelo: '3061',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Rompedor3: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0883.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0885.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0887.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0888.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0891.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0892.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3061R/IMG_0894.jpg'
            ],

            nombre: 'Rompedor Rojo',
            modelo: '3061',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },
    
        Rompedor4: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0838.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0841.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0842.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0845.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0846.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0848.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_BLUE/IMG_0849.jpg'
            ],

            nombre: 'Rompedor Azul',
            modelo: '3065',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },



        Rompedor5: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0866.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0868.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0870.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0872.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0875.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0876.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0879.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3065_R/IMG_0881.jpg'
            ],

            nombre: 'Rompedor Rojo',
            modelo: '3065',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },
    
        Rompedor6: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0896.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0899.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0900.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0903.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0906.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0908.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0912.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_A/IMG_0914.jpg'
            ],

            nombre: 'Rompedor Amarillo',
            modelo: '3125',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Rompedor7: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0852.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0854.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0856.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0858.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0859.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0861.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/3125_BLUE/IMG_0865.jpg'
            ],

            nombre: 'Rompedor Azul',
            modelo: '3125',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },
    

        Rompedor8: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1210.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1212.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1215.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1217.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1218.jpg',
                'img/productos/CATALOGO NUEVO/ROMPEDORES/ROMPEDOR_GASOLINA95A/IMG_1221.jpg'
            ],

            nombre: 'Rompedor a Gasolina Azul',
            modelo: '95A',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


    




        // -----------------------------------------------------------------------------------------ROTOMARTILLOS

        Rotomartillo1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_0989.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_0991.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_0993.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_0994.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_0998.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_1000.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015A/IMG_1002.jpg'
            ],

            nombre: 'Rotomartillo Amarillo',
            modelo: '3015',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Rotomartillo2: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0946.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0950.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0951.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0953.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0956.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015R/IMG_0958.jpg'
            ],

            nombre: 'Rotomartillo Rojo',
            modelo: '3015',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Rotomartillo3: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0935.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0938.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0939.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0940.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0942.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3015V/IMG_0944.jpg'
            ],

            nombre: 'Rotomartillo Verde',
            modelo: '3015',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

        Rotomartillo4: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0960.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0962.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0964.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0966.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0967.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0970.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3016A/IMG_0972.jpg'
            ],

            nombre: 'Rotomartillo Amarillo',
            modelo: '3016',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Rotomartillo5: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0974.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0977.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0979.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0980.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0982.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0984.jpg',
                'img/productos/CATALOGO NUEVO/ROTOMARTILLOS/ROTOMARTILLO_3017A/IMG_0986.jpg'
            ],

            nombre: 'Rotomartillo Amarillo',
            modelo: '3017',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },
    



        
        // -----------------------------------------------------------------------------------------HERRAMIENTA INALAMBRICA
        Inalambrica1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET/IMG_1051.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET/IMG_1052.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET/IMG_1054.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET/IMG_1057.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET/IMG_1060.jpg'
            ],

            nombre: 'Kit 2 en 1 Set Azul',
            modelo: '2 en 1 Azul',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },

        Inalambrica2: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1013.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1014.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1017.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1019.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1021.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1023.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1025.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1027.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1029.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_2IN1_TOOLSET_AMARILLO/IMG_1030.jpg'
            ],

            nombre: 'Kit 2 en 1 Set Amarillo',
            modelo: '2 en 1 Amarillo',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        Inalambrica3: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AMARILLO/IMG_1062.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AMARILLO/IMG_1067.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AMARILLO/IMG_1071.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AMARILLO/IMG_1072.jpg'
            ],

            nombre: 'Kit 4 en 1 Set Amarillo',
            modelo: '4 en 1 Amarillo',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


            Inalambrica4: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1077.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1078.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1080.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1083.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1085.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/KIT_4IN1_TOOLSET_AZUL/IMG_1087.jpg'
            ],

            nombre: 'Kit 4 en 1 Set Azul',
            modelo: '4 en 1 Azul',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },




            Inalambrica5: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1033.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1034.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1037.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1039.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1041.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1043.jpg',
                'img/productos/CATALOGO NUEVO/HERRAMIENTAS INALAMBRICAS/ROTOMARTILLO_INALA_XR/IMG_1045.jpg'
            ],

            nombre: 'Rotomartillo Inalambrico',
            modelo: 'XR',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },



        // ----------------------------------------------------------------------------------------- DESBROZADORAS Y MOTOSIERRAS
            Motosierra1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1089.jpg',
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1090.jpg',
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1092.jpg',
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1097.jpg',
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1098.jpg',
                'img/productos/CATALOGO NUEVO/DESBROSADORAS Y MOTOSIERRAS/MOTOSIERRA_CS5800_24/IMG_1100.jpg'
            ],

            nombre: 'Motosierra 24"',
            modelo: 'CS5800',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        // -----------------------------------------------------------------------------------------FUMIGADORES
            Fumigadora1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1104.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1106.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1107.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1110.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1112.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1114.jpg',
                'img/productos/CATALOGO NUEVO/FUMIGADORAS/FUMIGADORA_GX35/IMG_1116.jpg'
            ],

            nombre: 'Fumigadora',
            modelo: 'GX35',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        // -----------------------------------------------------------------------------------------VIBRADORES

            Vibrador1: {
            imagenes: [
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg',
                'img/productos/CATALOGO NUEVO/VIBRADOR DE CONCRETO/VIBRADOR_CONCRETO/IMG_1127.jpg'
            ],

            nombre: 'Vibrador de Concreto',
            modelo: 'Vibrador de Concreto',
            //precio: 3700,
            descripcion: 'Generador portátil compacto de 900W, ideal para pequeños trabajos en exteriores.',
            caracteristicas: ['Potencia: 900W', 'Peso: 10kg', 'Combustible: Gasolina'],
            //infoAdicional: 'Este generador tiene una vida útil de 5 años con mantenimiento adecuado.',
            linkCompra: 'https://www.example.com/comprar-generador1'
            },


        // Añade más productos aquí según sea necesario
    };

    var producto = productos[idProducto];
    if (producto) {
        // Muestra la información del producto
        // Muestra la imagen principal
        document.getElementById('detalle-imagen').innerHTML =
        `<img id="imagen-principal"
            src="${producto.imagenes ? producto.imagenes[0] : producto.imagen}"
            alt="${producto.nombre}">`;

        // Crear miniaturas automáticamente
        const contenedorMiniaturas = document.getElementById('miniaturas-producto');

        if (contenedorMiniaturas) {

            contenedorMiniaturas.innerHTML = '';

            if (producto.imagenes && producto.imagenes.length > 0) {

                producto.imagenes.forEach(function(imagen) {

                    const miniatura = document.createElement('img');

                    miniatura.src = imagen;
                    miniatura.alt = producto.nombre;

                    miniatura.onclick = function() {

                        document.getElementById('imagen-principal').src = imagen;

                    };

                    contenedorMiniaturas.appendChild(miniatura);

                });

            }
        }

// Información del producto
document.getElementById('detalle-nombre').textContent = producto.nombre;
document.getElementById('detalle-modelo').textContent = `Modelo: ${producto.modelo}`;
        document.getElementById('detalle-nombre').textContent = producto.nombre;
        document.getElementById('detalle-modelo').textContent = `Modelo: ${producto.modelo}`; // Mostrar modelo
        //document.getElementById('detalle-precio').textContent = `Precio: $${producto.precio}`; // Mostrar precio
        document.getElementById('detalle-descripcion').textContent = producto.descripcion;
        
        var listaCaracteristicas = document.getElementById('detalle-caracteristicas');
        listaCaracteristicas.innerHTML = '';  // Limpiar lista anterior
        producto.caracteristicas.forEach(function(caracteristica) {
            var li = document.createElement('li');
            li.textContent = caracteristica;
            listaCaracteristicas.appendChild(li);
        });

        // Muestra el detalle del producto
        document.getElementById('detalle-producto').classList.remove('hidden');
        document.getElementById('productos').classList.add('hidden');
    }
}

// Cerrar detalles y volver a la lista de productos
function cerrarDetalle() {
    document.getElementById('detalle-producto').classList.add('hidden');
    document.getElementById('productos').classList.remove('hidden');
}

// Función para ocultar la sección del detalle del producto
function ocultarDetalle() {
    const detalleProducto = document.getElementById('detalle-producto');
    if (detalleProducto) {
        detalleProducto.classList.add('hidden'); // Oculta la sección añadiendo la clase 'hidden'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Aquí dentro va el código que antes ponías fuera
    const headerMenu = document.getElementById('header-menu');
    if (headerMenu) {
        headerMenu.addEventListener('click', function() {
            ocultarDetalle();
        });
    } else {
        console.error('El elemento con id "header-menu" no se encuentra.');
    }
});




