// ALUMNO 5 - Filtros por edad, elegir color, talla y agregar al carrito
(() => {
  const seccion = document.getElementById('ninos');
  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // 1. Filtrar
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

  // 2. Elegir color
  productos.forEach(producto => {
    const bolitas = producto.querySelectorAll('.a5-color');
    const texto = producto.querySelector('.a5-color-texto');
    bolitas.forEach(bolita => bolita.addEventListener('click', () => {
      bolitas.forEach(b => b.classList.remove('activo'));
      bolita.classList.add('activo');
      texto.textContent = 'Color: ' + bolita.dataset.color;
    }));

    // 3. Elegir talla
    const tallas = producto.querySelectorAll('.a5-talla');
    tallas.forEach(t => t.addEventListener('click', () => {
      tallas.forEach(x => x.classList.remove('activo'));
      t.classList.add('activo');
    }));
  });

  // 4. Agregar al carrito con color + talla
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const color = producto.querySelector('.a5-color.activo');
      const talla = producto.querySelector('.a5-talla.activo');
      let nombre = producto.dataset.nombre;
      if (color) nombre += ' - ' + color.dataset.color;
      if (talla) nombre += ' (Talla ' + talla.dataset.talla + ')';
      agregarAlCarrito(nombre, producto.dataset.precio);
    });
  });
})();