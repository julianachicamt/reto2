//Funciones para clientes
function traerClientes(){
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function(clientes){
             let cs=clientes.items;
            //console.log(clientes);
            $("#listaClientes").empty();
            tabla = "<center> <table border='1' class='table table-striped'> <tr> <th>ID</th> <th>NOMBRE</th> <th>EMAIL</th> <th>EDAD</th> <th>ELIMINAR</th> </tr>"
			total = 0;
			filas = ""
            for (i=0;i<cs.length;i++){
                filas += "<tr>";
				filas += "<td>" + cs[i].id + "</td>";
				filas += "<td>" + cs[i].name + "</td>";
				filas += "<td>" + cs[i].email + "</td>";
				filas += "<td>" + cs[i].age + "</td>";
                filas += "<td><button onclick='eliminarClientes("+cs[i].id+")'>eliminar</button></td><br>";
				filas += "</tr>";


                // $("#listaClientes").append(cs[i].id+cs[i].name+cs[i].email+cs[i].age+"<br>")
                // $("#listaClientes").append("<button onclick='eliminarClientes("+cs[i].id+")'>eliminar</button><br>");
            }
            filas += "</table>"
            $("#listaClientes").append(tabla + filas + "<tr>" + "</center>")
			console.log(cs)
        },
        error: function(xhr,status){
            alert('Ha sucedido un problema')
       },
       // complete: function(){

      // }

    });
}

function guardarClientes(){
    let idCliente=$("#idCliente").val();
    let nombreCliente=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edadCliente=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombreCliente,
        email:emailCliente,
        age:edadCliente,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idcliente").val("");
            $("#nombrecliente").val("");
            $("#emailcliente").val("");
            $("#edadcliente").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerClientes();
        }
    });
}

function editarClientes(){
    let idCliente=$("#idCliente").val();
    let nombreCliente=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edadCliente=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombreCliente,
        email:emailCliente,
        age:edadCliente,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idcliente").val("");
            $("#nombrecliente").val("");
            $("#emailcliente").val("");
            $("#edadcliente").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerClientes();
        }
    });
}

function eliminarClientes(idCliente){

    let data={
        id:idCliente,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idcliente").val("");
            $("#nombrecliente").val("");
            $("#emailcliente").val("");
            $("#edadcliente").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerClientes();
        }
    });
}



//Funciones para cabanas
function traerCabanas(){
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "GET",
        datatype: "JSON",
        success: function(cabanas){
             let cs=cabanas.items;
            //console.log(clientes);
            $("#listaCabanas").empty();
            tabla = "<center> <table border='1' class='table table-striped'> <tr> <th>ID</th> <th>BRAND</th> <th>ROOMS</th> <th>CATEGORY_ID</th> <th>NAME</th> <th>EIMINAR</th> </tr>"
            total = 0;
			filas = ""
            for (i=0;i<cs.length;i++){
                filas += "<tr>";
				filas += "<td>" + cs[i].id + "</td>";
				filas += "<td>" + cs[i].brand + "</td>";
				filas += "<td>" + cs[i].rooms + "</td>";
				filas += "<td>" + cs[i].category_id + "</td>";
                filas += "<td>" + cs[i].name + "</td>";
                filas += "<td><button onclick='eliminarCabana("+cs[i].id+")'>eliminar</button></td><br>";
				filas += "</tr>";
            }
            filas += "</table>"
            $("#listaCabanas").append(tabla + filas + "<tr>" + "</center>")
			console.log(cs)
        },
        error: function(xhr,status){
            alert('Ha sucedido un problema')
       },
        complete: function(){
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
       }

    });
}



function guardarCabana(){
    let id=$("#id").val();
    let brand=$("#brand").val();
    let rooms=$("#rooms").val();
    let category_id=$("#category_id").val();
    let name=$("#name").val();

    let data={
        id:id,
        brand:brand,
        rooms:rooms,
        category_id:category_id,
        name:name,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "POST",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerCabanas();
        }
    });
}

function editarCabana(){
    let id=$("#id").val();
    let brand=$("#brand").val();
    let rooms=$("#rooms").val();
    let category_id=$("#category_id").val();
    let name=$("#name").val();

    let data={
        id:id,
        brand:brand,
        rooms:rooms,
        category_id:category_id,
        name:name,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "PUT",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerCabanas();
        }
    });
}

function eliminarCabana(id){

    let data={
        id:id,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url:  "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "DELETE",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerCabanas();
        }
    });
}

//Funciones para mensajes
function traerMensajes(){
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function(mensajes){
             let cs=mensajes.items;
            //console.log(mensajes);
            $("#listaMensajes").empty();
            tabla = "<center> <table border='1' class='table table-striped'> <tr> <th>ID</th> <th>MENSAJE</th><th>ELIMINAR</th>  </tr>"
			total = 0;
			filas = ""
            for (i=0;i<cs.length;i++){
                filas += "<tr>";
				filas += "<td>" + cs[i].id + "</td>";
				filas += "<td>" + cs[i].messagetext + "</td>";
                filas += "<td><button onclick='eliminarMensaje("+cs[i].id+")'>eliminar</button></td><br>";
				filas += "</tr>";
            }
            filas += "</table>"
            $("#listaMensajes").append(tabla + filas + "<tr>" + "</center>")
			console.log(cs)
        },
        error: function(xhr,status){
            alert('Ha sucedido un problema')
       },
       // complete: function(){

      // }

    });
}

function guardarMensaje(){
    let idMensaje=$("#idMensaje").val();
    let mensaje=$("#mensaje").val();

    let data={
        id:idMensaje,
        messagetext:mensaje,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idMensaje").val("");
            $("#mensaje").val("");

        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerMensajes();
        }
    });
}

function editarMensaje(){
    let idMensaje=$("#idMensaje").val();
    let mensaje=$("#mensaje").val();

    let data={
        id:idMensaje,
        messagetext:mensaje,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idMensjae").val("");
            $("#mensaje").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerMensajes();
        }
    });
}

function eliminarMensaje(idMensaje){

    let data={
        id:idMensaje,
    };

    let datatosend=JSON.stringify(data)
    console.log(datatosend);
    $.ajax({
        url: "https://ga05ff946603c87-bdintento.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        datatype: "JSON",
        data:datatosend,
        contentType:'application/json',
        success: function(respuesta){
            $("#idMensaje").val("");
            $("#mensaje").val("");
        },
        error: function(xhr,status){
                alert('Ha sucedido un problema')
        },
        complete: function(){
            traerMensajes();
        }
    });
}