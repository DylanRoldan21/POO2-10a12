// ALUMNO 4 - Filtros, favoritos y agregar al carrito
(() => {
  const seccion = document.getElementById('mujer');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // 1. Filtrar por categoría
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      
      productos.forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
    });
  });

  // 2. Favoritos (corazón)
  let favoritos = 0;
  const contador = document.getElementById('a4-favoritos');
  
  seccion.querySelectorAll('.a4-fav').forEach(corazon => {
    corazon.addEventListener('click', () => {
      // Alternamos el corazón entre lleno (♥) y vacío (♡)
      corazon.classList.toggle('activo');
      const marcado = corazon.classList.contains('activo');
      corazon.textContent = marcado ? '♥' : '♡';
      
      // Sumamos o restamos del contador
      favoritos += marcado ? 1 : -1;
      contador.textContent = favoritos;
      
      // RETO EXTRA: Mensaje dinámico
      if (marcado) {
        mostrarToast('❤️ Agregado a favoritos');
      } else {
        mostrarToast('💔 Quitado de favoritos');
      }
    });
  });

  // 3. Agregar al carrito
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      agregarAlCarrito(producto.dataset.nombre, producto.dataset.precio);
    });
  });
})();