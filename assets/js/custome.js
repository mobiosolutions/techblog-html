$(function() {
    /* CustomeJS */
    'use strict';

    (function($) {
        $(document).ready(function() {
            /**************** Check IE **************/
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                $("html").addClass("ie");
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            /**************** Custom Scroll **************/
            // $("body").mCustomScrollbar({
            //     scrollInertia: 1000
            // }); 
            $(".topics-list").mCustomScrollbar({
                scrollInertia: 1000,
                axis:"x",
				advanced:{autoExpandHorizontalScroll:true}
            });
            /**************** Tooltip **************/
            $('[data-toggle="tooltip"]').tooltip();

            /**************** Dropdown **************/
            $(".dropdown-toggle").dropdown();

            /**************** Select Picker **************/
            $('select').selectpicker();

            /**************** Search Modal **************/
            $("#search-modal").click(function(e) {
                e.preventDefault();
                $("#search-outer").addClass("open-searchBox");
                $("body").addClass("bg-overlay");
            });
            $("#close").click(function(e) {
                e.preventDefault();
                $("#search-outer").removeClass("open-searchBox");
                $("body").removeClass("bg-overlay");
            });
            $(document).on('keydown', function(event) {
                if (event.key == "Escape") {
                    event.preventDefault();
                    $("#search-outer").removeClass("open-searchBox");
                    $("body").removeClass("bg-overlay");
                }
            }); 

            /**************** Menu Open Background overlay **************/
            $(".navbar-toggler").click(function() {
                $("body").addClass("bg-overlay");
            });   
            
            /**************** Close Menu **************/
            $(".close-menu a").click(function(e) {
                e.preventDefault();
                $(".navbar-collapse").removeClass("show");
                $("body").removeClass("bg-overlay");
            });         
            
            // ------------------------ Navigation Scroll
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 200) {
                    $('header').addClass('header-fixed');
                }
                else {
                    $('header').removeClass('header-fixed');
                }
            });
            
            // Scroll Top
            $(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 200) {
                        $('.scroll-top').css("opacity", "1");
                        } 
                    else 
                    {
                        $('.scroll-top').css("opacity", "0");
                    }
                });
                $('.scroll-top').click(function(e) {
                    e.preventDefault();
                    $('body,html').animate({
                        scrollTop: 0
                    }, 500);
                });
            });

            // ------------------------ Footer
            if($(window).width() > 1170)
            {
                $("footer").footerReveal();
            } 

            // ------------------------ File Upload
            $("input[type=file]").on("change", function(){
                // Name of file and placeholder
                var file = this.files[0].name;
                if($(this).val()!="")
                {
                    $(".file-upload-name").text(file);
                    $(".file-upload-name").css("display", "block");
                } else {
                    $(".file-upload-name").text();
                    $(".file-upload-name").css("display", "none");
                }
            });
            
        });

        // ------------------------ Tab hover
        tab_hover();
    
    })(jQuery);

    // ------------------------ Tab hover Functions
    function tab_hover()
    {
        var tab=$(".price_tab");
        if($(tab).length>0)
            {
                tab.append('<li class="hover_bg"></li>');
                if($('.price_tab li a').hasClass('active_hover'))
                {
                    var pLeft=$('.price_tab li a.active_hover').position().left,pWidth=$('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({left:pLeft,width:pWidth})
                }
                $('.price_tab li a').on('click',function()
                {
                    $('.price_tab li a').removeClass('active_hover');
                    $(this).addClass('active_hover');
                    var pLeft=$('.price_tab li a.active_hover').position().left,pWidth=$('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({left:pLeft,width:pWidth});
                });
            }
    }


    (function($) {
        $.fn.footerReveal = function(options) {
            var $this = $(this),
            $prev = $this.prev(),
            defaults = {
                shadow : true
            }, 
            options = $.extend(defaults, options);
             
             $this.css({
               position : 'fixed',
               bottom : '0',
               'z-index' : -1000,
               margin : '0 auto'
            });
            $(function() {
                $prev.css({
                    'margin-bottom' : $this.css('height')
                });
            });
        }
    }) (jQuery);
});