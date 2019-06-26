$(document).ready(function () {
    
    $.ajax({
        method: "GET",
        url: "post.json",
        dataType: "json"
    })

    .done(function( resp ) {
        resp.forEach(consulta => {
            var icono;
            if(consulta.id % 2 === 1){
                icono = "fa fa-bed";
            }else{
                icono = "fa fa-american-sign-language-interpreting";
            }


            $(".timeline").append(`<li>
            <div class="timeline-badge"><em class="${icono}"></em></div>
            
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h5 class="timeline-title mt-2">${consulta.title}</h5>
                </div>
                
                <div class="timeline-body">
                    <p>${consulta.body}</p>
                </div>
            </div>
        </li>`);
        });
    })

    .fail(function( resp ) {
        console.log('ERROR RESPUESTA');
        console.log(resp);
    });

    $(document).on("click", '.timeline', function () {
        $(this).find(".fa").class("");
    });
});