$(() => {
    $('#menu > ul').hide()
    $('#menu > h3').on('mouseenter mouseleave', function(){
        // $(this).next().slideDown(1000).siblings('ul').slideUp(1000);
        $(this).next().toggle(1000);
    })
})