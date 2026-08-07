// ============================================================
//  CATÁLOGO DE PRODUCTOS
//  Configuración: Cambia TELEFONO en app.js
//  Las imágenes apuntan a carpetas por categoría (ej: img/medicinales/menta.jpg)
//  Si no existen, se muestra un placeholder con el nombre del producto
// ============================================================

const productos = [
    // 🌿 Medicinales
    { id: 1, nombre: "Menta", categoria: "medicinales", precio: "3.50", img: "img/medicinales/menta.jpg" },
    { id: 2, nombre: "Manzanilla", categoria: "medicinales", precio: "4.00", img: "img/medicinales/manzanilla.jpg" },
    { id: 3, nombre: "Ruda", categoria: "medicinales", precio: "2.50", img: "img/medicinales/ruda.jpg" },
    { id: 4, nombre: "Albahaca", categoria: "medicinales", precio: "3.00", img: "img/medicinales/albahaca.jpg" },

    // 🌸 Ornamentales
    { id: 5, nombre: "Helecho", categoria: "ornamentales", precio: "7.00", img: "img/ornamentales/helecho.jpg" },
    { id: 6, nombre: "Suculenta Echeveria", categoria: "ornamentales", precio: "5.50", img: "img/ornamentales/suculenta.jpg" },
    { id: 7, nombre: "Cactus San Pedro", categoria: "ornamentales", precio: "6.00", img: "img/ornamentales/cactus.jpg" },

    // 🪴 Maceteros Plásticos
    { id: 8, nombre: "Mac. Plástico Blanco 20cm", categoria: "plasticos", precio: "4.00", img: "img/plasticos/blanco.jpg" },
    { id: 9, nombre: "Mac. Plástico Negro 30cm", categoria: "plasticos", precio: "6.00", img: "img/plasticos/negro.jpg" },
    { id: 10, nombre: "Mac. Plástico Terracota", categoria: "plasticos", precio: "5.00", img: "img/plasticos/terracota.jpg" },

    // 🏺 Barro Pulido
    { id: 11, nombre: "Mac. Barro Pulido Rojo", categoria: "barro_pulido", precio: "8.00", img: "img/barro_pulido/rojo.jpg" },
    { id: 12, nombre: "Mac. Barro Pulido Natural", categoria: "barro_pulido", precio: "7.50", img: "img/barro_pulido/natural.jpg" },

    // 🪨 Barro Crudo
    { id: 13, nombre: "Mac. Barro Crudo Pequeño", categoria: "barro_crudo", precio: "5.00", img: "img/barro_crudo/pequeno.jpg" },
    { id: 14, nombre: "Mac. Barro Crudo Grande", categoria: "barro_crudo", precio: "9.00", img: "img/barro_crudo/grande.jpg" },

    // 🧶 Macramé
    { id: 15, nombre: "Macramé Colgante (con maceta)", categoria: "macrame", precio: "12.00", img: "img/macrame/colgante.jpg" },
    { id: 16, nombre: "Macramé Pared (sin maceta)", categoria: "macrame", precio: "10.00", img: "img/macrame/pared.jpg" },

    // 🌱 Mini Jardines
    { id: 17, nombre: "Mini Jardín Zen", categoria: "mini_jardines", precio: "15.00", img: "img/mini_jardines/zen.jpg" },
    { id: 18, nombre: "Mini Jardín Tropical", categoria: "mini_jardines", precio: "18.00", img: "img/mini_jardines/tropical.jpg" },

    // 🐠 Mini Peceras
    { id: 19, nombre: "Mini Pecera Esférica 5L", categoria: "mini_peceras", precio: "20.00", img: "img/mini_peceras/esferica.jpg" },
    { id: 20, nombre: "Mini Pecera Hexagonal 8L", categoria: "mini_peceras", precio: "25.00", img: "img/mini_peceras/hexagonal.jpg" },

    // 🏺 Mini Terrarios
    { id: 21, nombre: "Mini Terrario Cerrado", categoria: "mini_terrarios", precio: "22.00", img: "img/mini_terrarios/cerrado.jpg" },
    { id: 22, nombre: "Mini Terrario Abierto", categoria: "mini_terrarios", precio: "19.00", img: "img/mini_terrarios/abierto.jpg" },

    // 🦋 Figuras Miniaturas
    { id: 23, nombre: "Mariposas x4 (Miniaturas)", categoria: "figuras_mini", precio: "3.00", img: "img/figuras_mini/mariposas.jpg" },
    { id: 24, nombre: "Mariquitas x6 (Miniaturas)", categoria: "figuras_mini", precio: "2.50", img: "img/figuras_mini/mariquitas.jpg" },
    { id: 25, nombre: "Honguitos x3 (Miniaturas)", categoria: "figuras_mini", precio: "4.00", img: "img/figuras_mini/honguitos.jpg" },

    // Piedras decorativas 7 libras
    { id: 26, nombre: "Piedras Blancas (Bolsa 7lb)", categoria: "piedras", precio: "8.00", img: "img/piedras/blancas.jpg" },
    { id: 27, nombre: "Piedras Negras (Bolsa 7lb)", categoria: "piedras", precio: "8.00", img: "img/piedras/negras.jpg" },
    { id: 28, nombre: "Piedras Mixtas (Bolsa 7lb)", categoria: "piedras", precio: "9.00", img: "img/piedras/mixtas.jpg" },

    // Piedras en lata
    { id: 29, nombre: "Piedras Lata Surtida", categoria: "piedras_lata", precio: "2.50", img: "img/piedras_lata/surtida.jpg" },

    // Figuras Cerámica y Madera (30-35cm)
    { id: 30, nombre: "Figura Madera 30cm", categoria: "figuras_grandes", precio: "28.00", img: "img/figuras_grandes/madera.jpg" },
    { id: 31, nombre: "Figura Cerámica Fría 35cm", categoria: "figuras_grandes", precio: "32.00", img: "img/figuras_grandes/ceramica.jpg" },

    // 🌱 NUEVO: Planta de Jade
    { id: 32, nombre: "Planta de Jade", categoria: "ornamentales", precio: "500.00", img: "img/plants/jade.jpg" }
];

// --- MAPEO DE CATEGORÍAS PARA FILTROS (con emojis y nombres amigables) ---
const categoriasMap = {
    'medicinales': '🌿 Medicinales',
    'ornamentales': '🌸 Ornamentales',
    'plasticos': '🪴 Mac. Plásticos',
    'barro_pulido': '🏺 Barro Pulido',
    'barro_crudo': '🪨 Barro Crudo',
    'macrame': '🧶 Macramé',
    'mini_jardines': '🌱 Mini Jardines',
    'mini_peceras': '🐠 Mini Peceras',
    'mini_terrarios': '🏝️ Mini Terrarios',
    'figuras_mini': '🦋 Fig. Miniaturas',
    'piedras': '🪨 Piedras 7lb',
    'piedras_lata': '🥫 Piedras Lata',
    'figuras_grandes': '🗿 Fig. 30-35cm'
};

// Exportamos para que estén disponibles globalmente (no se usa módulos por simplicidad)
// Así app.js puede acceder a estas variables
