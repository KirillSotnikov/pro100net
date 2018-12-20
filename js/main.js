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
$('[data-comment]').click(function(){
    var comment = $(this).attr('data-comment');
    $('section.blog_comment .wrapper .modal' + comment).toggleClass('active');
    if($('section.blog_comment .wrapper .modal' + comment).hasClass('active')){
        $('[data-comment="' + comment + '"]' + ' .comment_rate_hide_text').html('Скрыть ответы');
        $('[data-comment="' + comment + '"]' + ' .comment_rate_hide_icon').addClass('active');
    } else {
        $('[data-comment="' + comment + '"]' + ' .comment_rate_hide_text').html('Показать ответы');
        $('[data-comment="' + comment + '"]' + ' .comment_rate_hide_icon').removeClass('active');
    }
    console.log('[data-comment="' + comment + '"]' + ' .comment_rate_hide_text');
    
});
$('[data-tab]').click(function(){
    var tab = $(this).attr('data-tab');
    
    $('.providers_tabul_container_modal').removeClass('active');
    $('.providers_tabul_container_list_item').removeClass('active');
    $(this).addClass('active');
    $('.providers_tabul_container_modal' + tab).addClass('active');

});

$('section.providers_table .providers_table_container_content_item_compare img').click(function(){
    $('.alert_compare').addClass('active');
});
$('.alert_compare .overlay').click(function(){
    $('.alert_compare').removeClass('active');
});