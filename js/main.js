/*$(window).on("load resize scroll",function(){
    $("#header_name").addClass("invisible");
    //For Identifying the top and height
    var fixed_header_height = $("#fixed-header").outerHeight();
    var window_height = ($(window).height());
    var body_container_height = window_height - fixed_header_height;
    $('.body-container').css({ top: fixed_header_height +'px' });
    $('.body-container').css({ height: body_container_height +'px' });
    $('.rest').css({ top: fixed_header_height +'px' });
    var name_container_height = ($("#name").outerHeight());
    var name_container_position = $("#name-cont").position();
    var scrollLimit = name_container_height + name_container_position.top;
    //Toggle
    if ($("#name").scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
        $("#name-cont").addClass("invisible");
        $("#header_name").removeClass("invisible");
    } else {
        $("#name-cont").removeClass("invisible");
        $("#header_name").addClass("invisible");
    }

    if ($("#arrow").scrollTop > body_container_height || document.documentElement.scrollTop > body_container_height) {
        $("#arrow").addClass("invisible");
    } else {
        $("#arrow").removeClass("invisible");
    }
});*/

var ScrollPosition=0;
var ScrollWindowHeight = 0;
var docHeight = 0;

$(document).ready(function(){
    $(window).on("scroll",function(){
        ScrollMouse();
        headerPosition();
        console.log(checkVisibility());

    });
    $(window).on("resize",function(){
        setTitleContainerHeight();
        onloadHeader();
    });
    $(window).on("load",function(){
        setTitleContainerHeight();
        onloadHeader();
    });
    $('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });
    $(".sub-title .rotate").textrotator({
        animation: "fade",
        speed: 1000
    });
});
function setTitleContainerHeight(){
    var fixed_header_height = $("#fixed-header").outerHeight();
    var window_height = ($(window).height());
    var body_container_height = window_height - fixed_header_height;
    $('.title-container').css({ height: body_container_height +'px' });
    $('#particles-js').css({ height: body_container_height +'px' });

}

function headerPosition(){
    var element =  $("#name").position().top  + $("#name").height() ;
    var docElement = document.documentElement.scrollTop;
    if (  docElement> element) {
        if(($("#name-cont").hasClass("invisible"))==false ) {
            $("#name-cont").addClass("invisible");
            $("#particles-js-1").addClass("invisible");
        }
        $("#header_name").removeClass("invisible");
    }
    if ( docElement < element)
    {
        if(($("#header_name").hasClass("invisible"))==false ) {
            $("#header_name").addClass("invisible");
        }
        $("#name-cont").removeClass("invisible");
        $("#particles-js-1").removeClass("invisible");
    }
}

function checkVisibility(){
    var elementTop =  $("#name").offset().top;
    var elementBottom = elementTop +  $("#name").outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return (elementBottom > viewportTop && elementTop < viewportBottom);
}

function onloadHeader(){
    if($(document.documentElement.scrollTop) > $(window).height()){
        if(($("#header_name").hasClass("invisible"))==false ) {
            $("#header_name").addClass("invisible");
        }
        $("#name-cont").removeClass("invisible");
    }
}
function ScrollMouse(){
    if( $(window).scrollTop()>ScrollPosition){
        if(($("#Scroll-action").hasClass("scroll-down"))==false ){
            $("#Scroll-action").removeClass("scroll-up");
            $("#Scroll-action").addClass("scroll-down");
        }
    }
    if($(window).scrollTop()<ScrollPosition) {
        if (($("#Scroll-action").hasClass("scroll-up")) == false) {
            $("#Scroll-action").removeClass("scroll-down");
            $("#Scroll-action").addClass("scroll-up");
        }
    }
    ScrollPosition=$(window).scrollTop();
    ScrollWindowHeight = ScrollPosition + $(window).height();
    docHeight = $(document).height();
    if($(window).scrollTop() === 0){
        $("#Scroll-action").removeClass("scroll-up");
        $("#Scroll-action").addClass("scroll-down");
    }
    if(ScrollWindowHeight == docHeight ){
        $("#Scroll-action").removeClass("scroll-down");
        $("#Scroll-action").addClass("scroll-up");
    }
}

