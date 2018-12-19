$('.menu_opener').click(function(){
    $('.menu_container').toggleClass('active');
    $('.menu_container_link').toggleClass('active');
    if($('.menu_container').hasClass('active')){
        $('html').css("overflow-y", "hidden");
    } else{
        $('html').css("overflow-y", "scroll");
    }
});
$('.open_phone').click(function(){
    $('.call_modal').toggleClass('active');
    $('.call_modal_container').toggleClass('active');
});
$('.call_modal_container_btn').click(function(){
    $('.call_modal').removeClass('active');
    $('.call_modal_container').removeClass('active');
});
$('section.blog_comment .wrapper .blog_comment_container_rate .comment_rate_hide').click(function(){
    $('section.blog_comment .wrapper .modal.active').toggleClass('active');
});