import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//funcion asincrona, pasa la funcion a segundo plano, para no detener el proceso
const tbody = document.querySelector("tbody")
const btnNew = document.querySelector("#nueva-categoria")

btnNew.addEventListener("click", () => {
    create()
})

function create() {

const newCategory = {
    name: "gaming",
    image: "https://kingspec.usa02.wondercdn.com/uploads/image/656805cb6a818.jpg"

}

    fetch('https://api.escuelajs.co/api/v1/categories/', {
        method: "POST",
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })

}

async function consultarDatosDeAPI() {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/categories')
    const datos = await respuesta.json()
    index(datos)
    console.log(datos)
}



function index(datos) {

    tbody.innerHTML = ``

    datos.forEach(data => {
        tbody.innerHTML += `
      <tr>
          <th scope="row">${data.id}</th>
          <td>${data.name}</td>
          <td><img src="${data.image}" alt="imagen producto" width="300" height="300"></td>
          <td>${data.creationAt}</td>
          <td>${data.updatedAt}</td>
    </tr>`
    });
}





 
consultarDatosDeAPI()