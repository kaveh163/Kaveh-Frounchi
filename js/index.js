$(function() {
    let bool = true;
    let imageWindow;
    let myHtml;
    let myHtml2;
    $('.enlarge').on('click', function(event){
       
        if(bool) {
            $('#large').empty();
            myHtml = '';

            // $(this).css("transform", "scale(1.5,1.5)");
            $(".enlarge").attr("data-toggle", "modal");
            $(".enlarge").attr("data-target", '#largen');
           let img = event.target;
           
        //    let width = img.width * 2;
        //    let height = img.height * 2;
        let width = '100%';
        let height = '100%';
        //    myHtml = "<div class='modal write' id='largen'>"
        myHtml += "<div class='modal write' id='largen'>"
           myHtml += "<div class='modal-dialog'>"
           myHtml += "<div class='modal-content'>"
           myHtml += "<div class='modal-body write'>"
           myHtml += "<button type='button' class='close' data-dismiss='modal'>&times;</button>"
           myHtml += "<img src=" + img.src + " width=" + width + " height=" + height + " alt='Magnified image'>"
           myHtml += "</div>"
           myHtml += "</div>"
           myHtml += "</div>"
           myHtml += "</div>"
            $('#large').append(myHtml);
            $("body").on('click', '.close', function() {
                myHtml = '';
                $('#large').empty();
            })
            // bool = false;
        } 
        
    })
    // $('.card').on('mouseenter', function() {
    //     $('.card').css("background-color", "green");
    // })
    
    // $('.card').on('mouseleave', function() {
    //     $('.card').css("background-color", "white");
    // })
})