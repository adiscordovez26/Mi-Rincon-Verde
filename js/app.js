// ============================================================
//  APLICACIÓN PRINCIPAL
//  Depende de: catalogo.js (productos y categoriasMap)
//  Configura el número de teléfono abajo
// ============================================================

// --- CONFIGURACIÓN ---
const TELEFONO = "5351714067"; // <--- PON AQUÍ TU NÚMERO (con código de país, sin + ni 00)

// --- OBTENER CATEGORÍAS ÚNICAS ---
const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];

// --- RENDERIZAR FILTROS ---
const filtrosContainer = document.getElementById('filtrosContainer');
let filtrosHTML = `<button class="filtro-btn active" data-categoria="todos">🏷️ Todos</button>`;
categoriasUnicas.forEach(cat => {
    const nombreMostrar = categoriasMap[cat] || cat;
    filtrosHTML += `<button class="filtro-btn" data-categoria="${cat}">${nombreMostrar}</button>`;
});
filtrosContainer.innerHTML = filtrosHTML;

// --- FUNCIÓN PARA GENERAR ENLACE DE WHATSAPP ---
function generarEnlaceWhatsApp(nombreProducto, precio) {
    const mensaje = `Hola, estoy interesado en comprar "${nombreProducto}" que vi en su catálogo por $${precio}. ¿Podrían confirmarme si tienen disponibilidad? ¡Gracias!`;
    return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS (CON FILTRO) ---
function renderizarProductos(categoriaFiltro = 'todos') {
    const grid = document.getElementById('gridProductos');
    
    let productosFiltrados = productos;
    if (categoriaFiltro !== 'todos') {
        productosFiltrados = productos.filter(p => p.categoria === categoriaFiltro);
    }

    if (productosFiltrados.length === 0) {
        grid.innerHTML = `<div class="sin-resultados">😕 No hay productos en esta categoría.<br>¡Pronto tendremos más novedades!</div>`;
        return;
    }

    let html = '';
    productosFiltrados.forEach(p => {
        const enlace = generarEnlaceWhatsApp(p.nombre, p.precio);
        const catMostrar = categoriasMap[p.categoria] || p.categoria;
        // Si la imagen no existe, se muestra un placeholder con el nombre (onerror)
        const imgSrc = p.img;
        html += `
            <div class="producto-card" data-categoria="${p.categoria}">
                <img src="${imgSrc}" alt="${p.nombre}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300x200/CCCCCC/000000?text=${encodeURIComponent(p.nombre)}'">
                <div class="producto-info">
                    <span class="categoria-badge">${catMostrar}</span>
                    <h3>${p.nombre}</h3>
                    <div class="precio">$${p.precio}</div>
                    <a href="${enlace}" target="_blank" class="btn-comprar" rel="noopener noreferrer">
                        📲 Comprar ahora
                    </a>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// --- EVENTOS DE FILTROS ---
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const categoria = this.dataset.categoria;
        renderizarProductos(categoria);
    });
});

// --- RENDERIZAR INICIAL (TODOS) ---
renderizarProductos('todos');

console.log('%c🍀 Catálogo "Mi Rincón Verde" cargado desde archivos externos.','font-size:16px; font-weight:bold; background:#1e3c2c; color:white; padding:10px; border-radius:6px;');
