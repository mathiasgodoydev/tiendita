const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

const listado = document.querySelector('.productos-lista');
listado.addEventListener('click', function (evento) {
  console.log(evento)
  if (evento.target.className == 'agregar') {
    console.log('Enviar producto', evento.target.dataset.producto);
    fetch('./../Tiendita/envio.php', {
      method:'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded', },
      body: encodeURI('ID=' + evento.target.dataset.producto)
    })
  }
})







abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})

const imagenes = [
    { src: "./imagenes/prueba1.jpg", alt: "Producto 1", precio: 50.000 },
    { src: "./imagenes/prueba2.png", alt: "Producto 2", precio: 200.000 },
    { src: "./imagenes/prueba3-removebg-preview.png", alt: "Producto 3", precio: 325.000 },
    { src: "./imagenes/prueba4.jpg", alt: "Producto 4", precio: 900.000 }
  ];
  
  let productosLista = document.querySelector('.productos-lista');
  
  imagenes.forEach(imagen => {
    const productoDiv = document.createElement('div');
    const productoBtn = document.createElement('button');
    productoBtn.textContent = "Agregar a carrito";
    productoBtn.setAttribute('data-producto', imagen.alt);
    productoBtn.classList.add('agregar')

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
    productoDiv.appendChild(productoBtn);
  
    productosLista.appendChild(productoDiv);
  });
  



