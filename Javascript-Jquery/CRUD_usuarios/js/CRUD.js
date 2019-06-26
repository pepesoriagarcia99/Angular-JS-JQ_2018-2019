$(document).ready(function () {
//clases btn del html: btn_editar--btn_eliminar--btn_crear

//añadir usuario
$(document).on("click",".btn_crear", function () {
    //variables html añadir: nombre--email--telefono
    let nombre = $("#nombre").val();
    let email = $("#email").val();
    let telefono = $("#telefono").val();
    console.log("nombre->"+nombre+" email->"+email+" tlf->"+telefono);

    let nuevo_usuario = (`
    <tr id="usuario">
        <td id="u_nombre">${nombre}</td>
        <td id="u_email">${email}</td>
        <td id="u_tlf">${telefono}</td>
        <td><button class="">Editar</button></td>
        <td><button class="btn_eliminar">Eliminar</button></td>
    </tr>
    `);

    $("#lista_usuarios").append(nuevo_usuario);

    $('#nuevo_alumno').modal('hide');
    $("#nombre").val("");
    $("#email").val("");
    $("#telefono").val("");
});
//borrar nota
$(document).on("click",".btn_eliminar", function(){
    $(this).closest("#usuario").remove();
    //console.log("borrado");
});
$(document).on("click","#usuario", function(){
    user_mo = $(this);
    let e_nombre = $(this).find("#u_nombre").text();
    let e_email = $(this).find("#u_email").text();
    let e_tlf = $(this).find("#u_tlf").text();
    console.log("nombre->"+e_nombre+" email->"+e_email+" tlf->"+e_tlf);

    $("#editar_alumno").html(`
    <div class="modal-dialog" role="document">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title" id="exampleModalLabel">Añadir Alumno</h5>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<!--formulario-->
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="nombre_nuevo_usuario" class="col-form-label">Nombre:</label>
							<input type="text" class="form-control" id="edit_nombre" value="${e_nombre}"/>
						</div>
						<div class="form-group">
							<label for="emais_nuevo_usuario" class="col-form-label">Email:</label>
							<input type="text" class="form-control" id="edit_email" value="${e_email}"/>
						</div>
						<div class="form-group">
							<label for="tlf_nuevo_usuario" class="col-form-label">Telefono:</label>
							<input type="text" class="form-control" id="edit_telefono" value="${e_tlf}"/>
						</div>
					</form>
				</div>
				<!--fin formulario-->
				<div class="modal-footer">
				  <button type="button" class="btn btn-secondary btn_cancelar" data-dismiss="modal">Cancelar</button>
				  <button type="button" class="btn btn-primary btn_editar">Guardar</button>
				</div>
			  </div>
			</div>`);
    $('#editar_alumno').modal('show');
    });
    $(document).on("click",".btn_editar", function(){
        let nombre_sus = $(this).closest("#editar_alumno").find("#edit_nombre").val();
        let email_sus = $(this).closest("#editar_alumno").find("#edit_email").val();
        let tlf_sus = $(this).closest("#editar_alumno").find("#edit_telefono").val();
        //console.log("---- "+nombre_sus);
        user_mo.find("#u_nombre").text(nombre_sus);
        user_mo.find("#u_email").text(email_sus);
        user_mo.find("#u_tlf").text(tlf_sus);
        //---------------------------------
        $('#editar_alumno').modal('hide');
        $("#edit_nombre").val("");
        $("#edit_email").val("");
        $("#edit_telefono").val("");
    });
});