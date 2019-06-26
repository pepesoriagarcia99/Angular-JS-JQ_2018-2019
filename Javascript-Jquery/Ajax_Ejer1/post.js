$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "post.json",
        dataType: "json"
    })
    .done(function( respuesta ) {
        respuesta.forEach(post => {
            $(".timeline").append(`<li>
            <div class="timeline-badge"><em class="fa fa-bed"></em></div>
            
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h5 class="timeline-title mt-2">${post.title}</h5>
                </div>
                
                <div class="timeline-body">
                    <p>${post.body}</p>
                </div>
            </div>
        </li>`);
        });
    })
    .fail(function( resp ) {
        alert("ERROR");
        console.log(resp);
    });

    //$(document).on("click", '.timeline', function () {
    //    $(this).find(".fa").class("");
    //});
});