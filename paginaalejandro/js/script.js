const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const listaCarrito = document.getElementById('lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id'),
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const elementoCarrito = document.createElement('div');
    elementoCarrito.classList.add('carrito-item');
    elementoCarrito.innerHTML = `
        <img src="${elemento.imagen}" width="100">
        <span>${elemento.titulo}</span>
        <span>${elemento.precio}</span>
        <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    `;
    listaCarrito.appendChild(elementoCarrito);
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        const elemento = e.target.parentElement;
        listaCarrito.removeChild(elemento);
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    return false;
}






function validarDatosContacto() {
    
    var nombre = document.getElementById("nombre").value;
    if (!/^[a-zA-Z]{1,15}$/.test(nombre)) {
        alert("Nombre no válido. Debe contener solo letras y tener máximo 15 caracteres.");
        return false;
    }

    
    var apellidos = document.getElementById("apellidos").value;
    if (!/^[a-zA-Z\s]{1,40}$/.test(apellidos)) {
        alert("Apellidos no válidos. Deben contener solo letras y tener máximo 40 caracteres.");
        return false;
    }

    
    var telefono = document.getElementById("telefono").value;
    if (!/^\d{1,9}$/.test(telefono)) {
        alert("Teléfono no válido. Debe contener solo números y tener máximo 9 dígitos.");
        return false;
    }

   
    var correo = document.getElementById("correo").value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        alert("Correo electrónico no válido.");
        return false;
    }

    return true;
}

function calcularPresupuesto() {
  
    var producto = parseFloat(document.getElementById("producto").value);
    var plazo = parseFloat(document.getElementById("plazo").value);
    var extras = document.querySelectorAll('input[name="extra"]:checked');
    var extrasCosto = 0;
    extras.forEach(function(extra) {
        extrasCosto += parseFloat(extra.value);
    });

   
    var presupuesto = producto / plazo / (1 - (plazo >= 12 ? 0.1 : 0)) + extrasCosto;

    
    document.getElementById("presupuesto").textContent = presupuesto.toFixed(2);
}




fetch("views/verduras.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return response.json();
  })
  .then(data => {
    const verdurasLista = document.getElementById("verduras-lista");
    data.verduras.forEach(verdura => {
      const li = document.createElement("li");
      li.textContent = `${verdura.nombre}: ${verdura.descripcion}`;
      verdurasLista.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error al cargar el archivo JSON de verduras:", error);
  });





const imagenes = document.querySelectorAll('.imagen-galeria');
const galeriaModal = document.getElementById('galeria-modal');
const imagenAmpliada = document.getElementById('imagen-ampliada');
const cerrarGaleria = document.getElementById('cerrar-galeria');

imagenes.forEach((imagen, index) => {
    imagen.addEventListener('click', () => {
        galeriaModal.style.display = 'block';
        imagenAmpliada.src = imagen.src;
    });
});

cerrarGaleria.addEventListener('click', () => {
    galeriaModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === galeriaModal) {
        galeriaModal.style.display = 'none';
    }
});
















  

  
  
