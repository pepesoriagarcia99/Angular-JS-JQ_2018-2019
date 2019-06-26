$(document).ready(function () {
    //añadir con modal
    $(document).on("click",".btn_añadir", function añade(){
        let titulo = $("#input_titulo").val();
        let cuerpo = $("#input_cuerpo").val();
        console.log("titulo:"+titulo+" cuerpo:"+cuerpo);

        let nueva_nota = `<div class="col-lg-4 mb-4 nota">
			<div class="card card-inverse card-warning">
				<div class="card-header" id="titulo">${titulo}</div>
					<div class="dropdown card-title-btn-container">
						<button type="button" class="btn btn-sm btn-subtle btn_borrar">Borrar</button>
					</div>
					<div class="card-block" id="cuerpo">${cuerpo}</div>
			</div>
        </div>`;

        $(".notas").append(nueva_nota);
        $('#nueva_nota').modal('hide');
        $("#input_titulo").val("");
        $("#input_cuerpo").val("");
    });
    //borrar nota
    $(document).on("click",".btn_borrar", function(){
        $(this).closest(".nota").remove();
        //console.log("borrado");
    });

    var nota;
    //boton editar en la nota
    $(document).on("click",".nota", function(){
        nota = $(this);
        var d_titulo = $(this).find("#titulo").text();
        var d_cuerpo = $(this).find("#cuerpo").text();
        console.log("Titulo: "+d_titulo+" cuerpo: "+d_cuerpo);

        $("#editar_nota").html(`
        <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar nota</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <form>
                  <div class="form-group">
                      <label for="NotaTitulo" class="col-form-label">Titulo:</label>
                      <input type="text" class="form-control" id="editar_titulo" value="${d_titulo}"/>
                  </div>
                  <div class="form-group">
                      <label for="NotaCuerpo" class="col-form-label">Cuerpo:</label>
                      
                      <textarea class="form-control" name="message" placeholder="Cuerpo..." rows="7" id="input_cuerpo">${d_cuerpo}</textarea>
                  </div>
                  <div class="dropdown user-dropdown col-md-12 col-lg-12 text-center text-md-right show">
	                <a class="btn btn-stripped dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		                <div class="username mt-1">
			                <h4 class="mb-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Colores</font></font></h4>
		                </div>
                    </a>
	                <div class="dropdown-menu dropdown-menu-right" style="margin-right: 1.5rem;" aria-labelledby="dropdownMenuLink">
		                <a class="dropdown-item" href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rojo</font></font></a>
		                <a class="dropdown-item" href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Verde</font></font></a>
	                </div>
                </div>
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn_cancelar" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary btn_editar">Guardar</button>
          </div>
        </div>
      </div>`);
        $('#editar_nota').modal('show');
    });
    //boton guardar modal
    $(document).on("click",".btn_editar", function(){
        //lee datos del modal
        let titulo = $(this).closest("#editar_nota").find("input").val();
        let cuerpo = $(this).closest("#editar_nota").find("textarea").val();
        //console.log("titulo: "+titulo+" cuerpo: "+cuerpo);
        nota.find("#titulo").text(titulo);
        nota.find("#cuerpo").text(cuerpo);
        //introducir la nota 
        
        //---------------------------------
        $('#editar_nota').modal('hide');
        $("#editar_titulo").val("");
        $("#editar_cuerpo").val("");
    });
});