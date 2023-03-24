const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})

const imagenes = [
    { src: "./imagenes/prueba1.jpg", alt: "Producto 1", precio: 50.000 },
    { src: "./imagenes/prueba2.png", alt: "Producto 2", precio: 200.000 },
    { src: "./imagenes/prueba3.png", alt: "Producto 3", precio: 325.000 },
    { src: "./imagenes/prueba4.jpg", alt: "Producto 4", precio: 900.000 }
  ];
  
  const productosLista = document.querySelector('.productos-lista');
  
  imagenes.forEach(imagen => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
  
    const img = document.createElement('img');
    img.src = imagen.src;
    img.alt = imagen.alt;
  
    const nombreP = document.createElement('p');
    nombreP.classList.add('producto-nombre');
    nombreP.textContent = imagen.alt;
  
    const precioP = document.createElement('p');
    precioP.classList.add('producto-precio');
    precioP.textContent = 'Gs. ' + imagen.precio.toFixed(3);
  
    productoDiv.appendChild(img);
    productoDiv.appendChild(nombreP);
    productoDiv.appendChild(precioP);
  
    productosLista.appendChild(productoDiv);
  });
  



