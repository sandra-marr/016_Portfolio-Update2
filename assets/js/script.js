$('.preview').mouseenter( function() {
    $(this).parent().css("background-color", "transparent").css("color", "transparent")

    $(this).css("background-color", "transparent").css("color", "transparent")
});

$('.preview').mouseout( function() {
    $(this).parent().css("background-color", "#DADED4").css("color", "#3C403D")

    $(this).css("background-color", "#DADED4").css("color", "#3C403D")
});

$('.autocollapse').on("click", function (){
    $('#navbarNavDropdown').removeClass('show')
    console.log("hello")

    $('.navbar-toggler').addClass('collapsed')    
})