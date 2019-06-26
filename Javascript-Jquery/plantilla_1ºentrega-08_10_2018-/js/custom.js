$(document).ready(function(){
    $('.card').find('btn btn-md btn-primary')
    $(selector).click(function (e){
        e.preventDefaul();
    });
});

$('.btn-añadir-fila').click(function (e) { 
    e.preventDefault();
    let html_nuevo_alumno = `
    <tr class="fila">
		<td>Pepe</td>
		<td>Soria</td>
		<td>1º</td>
		<td><p class="btn btn-md btn-primary btn-edit">Editar</p><p class="btn btn-md btn-primary btn-delete">Eliminar</p></td>
	 </tr>`;
    $('.tabla_alumno').append(html_nuevo_alumno);
});

$('.btn-edit').click(function (e) { 
    e.preventDefault();
    window.open("nuevo_alumno.html", "NEW", "width=1000, height=1000");
    console.log("ok")
});
$('.btn-delete').click(function (e) { 
    e.preventDefault();
    $(".fila").remove();
});

function save(){window.close(); }