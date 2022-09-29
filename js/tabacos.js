let contenedor = document.getElementById("contenedor");
const tabacos = [
    { id: 1, nombre: "Tabaco Achalay Menta", precio: 150, img: "../resources/tabaco-achalay-menta.jpg" },
    { id: 2, nombre: "Tabaco Achalay Vainilla", precio: 150, img: "../resources/tabaco-achalay-vainilla.jpg" },
    { id: 3, nombre: "Tabaco Achalay", precio: 150, img: "../resources/tabaco-achalay.jpg" },
    { id: 4, nombre: "Tabaco Cerrito Chocolate", precio: 150, img: "../resources/tabaco-cerrito-chocolate.jpg" },
    { id: 5, nombre: "Tabaco Cerrito Vainilla", precio: 150, img: "../resources/tabaco-cerrito-vainilla.jpg" },
    { id: 6, nombre: "Tabaco Cerrito", precio: 150, img: "../resources/tabaco-cerrito.jpg" },
    { id: 7, nombre: "Tabaco Cuatro Leguas", precio: 150, img: "../resources/tabaco-cuatro-leguas-50gr.jpg" },
    { id: 8, nombre: "Tabaco Don Jose", precio: 150, img: "../resources/tabaco-don-jose.jpg" },
    { id: 9, nombre: "Tabaco Las Hojas Natural", precio: 150, img: "../resources/tabaco-las-hojas-natural.jpg" },
    { id: 10, nombre: "Tabaco Las Hojas", precio: 150, img: "../resources/tabaco-las-hojas.jpg" },
    { id: 11, nombre: "Tabaco Red Field Natural", precio: 150, img: "../resources/tabaco-red-field-natural.jpg" },
    { id: 12, nombre: "Tabaco Red Field Vainilla", precio: 150, img: "../resources/tabaco-red-field-vainilla.jpg" },
    { id: 13, nombre: "Tabaco Saints Natural", precio: 150, img: "../resources/tabaco-saints-natural-30gr.jpg" },
    { id: 14, nombre: "Tabaco Saints Virginia", precio: 150, img: "../resources/tabaco-saints-virginia-50gr.jpg" },
]; 
tabacos.forEach(item => {
    let productos = document.createElement("div");
    productos.className = "container-card col my-3";
    productos.innerHTML= `
        <img src="${item.img}" alt="Avatar" class="image img__index" style="width:100%">
        <h4 class="card-titulo text-center">${item.nombre}</h4>
        <h4 class="card-titulo">$${item.precio}</h4>
        <div class="middle">
            <button id="${item.id}" class="text">Comprar</button>
        </div>
    `
    contenedor.append(productos);
})