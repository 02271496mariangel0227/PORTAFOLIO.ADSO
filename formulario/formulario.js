let data = []
function registrar() {
    
    let g = ""
    console.log(document.getElementById("lista").value);
    if (document.getElementById("m").checked){
        console.log("Masculino");
        g="Masculino"
    }else{
        console.log("Femenino");
        g="Femenino"
    }

   
    let datos = {}
    datos = {genero:g, 
            tipodoc: document.getElementById("tipo_documento").value,
            Nombre: document.getElementById("Nombres").value, 
            Apellido:document.getElementById("Apellidos").value,
            Telefono:document.getElementById("Telefono").value,
            Fecha:document.getElementById("Fecha").value,
            Correo:document.getElementById("Correo").value,
        }
    console.log(datos);

    data.push(datos)
    console.log(data) 
}

function pintar(){
    data.forEach((item, i)=>{
        let ul = document.createElement("ul")
        let li = document.createElement("li")
        // li.textContent=item.Nombre + "-" +item.Apellido + "-" +item.genero + "-" +item.Telefono + "-" +item.tipodoc + "-" +item.Fecha + "-" +item.Correo
        li.textContent=(`${item.Nombre} \n ${item.Apellido} \n${item.genero} \n${item.Telefono} ${item.tipodoc} ${item.Fecha} ${item.Correo}`)

        ul.appendChild(li)
        document.getElementById("listaDatos").appendChild(ul)
    })
}





