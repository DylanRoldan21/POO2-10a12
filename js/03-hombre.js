// ALUMNO 3 - Filtros, elegir talla y agregar al carrito
(() => {
  const seccion = document.getElementById('hombre');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // 1. Filtrar productos por categoría
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      // Quitamos la clase 'activo' de todos los botones y se la damos al clickeado
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      
      const categoria = boton.dataset.filtro;
      
      // Mostramos u ocultamos los productos según la categoría
      productos.forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
    });
  });

  // 2. Seleccionar talla
  seccion.querySelectorAll('.a3-tallas').forEach(grupo => {
    const botones = grupo.querySelectorAll('button');
    botones.forEach(b => b.addEventListener('click', () => {
      // Desmarcamos todas las tallas y marcamos la elegida
      botones.forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
    }));
  });

  // 3. Agregar al carrito (obliga a elegir talla)
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const talla = producto.querySelector('.a3-tallas button.activo');
      
      // Si no hay talla seleccionada, mostramos aviso y detenemos la acción
      if (!talla) {
        mostrarToast('⚠️ Primero elige una talla');
        return;
      }
      
      // Agregamos al carrito compartido (Nombre + Talla)
      agregarAlCarrito(producto.dataset.nombre + ' (Talla ' + talla.textContent + ')', producto.dataset.precio);
    });
  });
})();