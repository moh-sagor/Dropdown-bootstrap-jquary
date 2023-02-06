jQuery(document).ready(function () {

    var width = jQuery(this).width();
    if (width <= 768) {
        jQuery(".toggle").show();
        jQuery(".menu").hide();
        jQuery(".menu ul").css({ 'display': 'block' });
        jQuery("menu ul ul").css({ 'position': 'inherit' });
    }
    else {
        jQuery(".toggle").hide();
        jQuery(".menu").show();
    }

    jQuery(".toggle").click(function () {
        jQuery(".menu").toggle(1000);
    });

    jQuery(".menu ul li").click(function () {
        jQuery(this).children("ul").toggle(1000);
        return false;
    });


    jQuery(".menu ul ul").parent("li").children("a").append(' <li class="fa fa-angle-down"></i>')

    jQuery(document).scroll(function () {
        var top = jQuery(this).scrollTop();
        if (top >= 145) {
            jQuery("nav").addClass("fixed");
            jQuery(".box").fadeIn(1000);
        }
        else {
            jQuery("nav").removeClass("fixed");
            jQuery(".box").fadeOut(1000);
        }

    });
    jQuery(".box").click(function () {
        jQuery("html").animate({ scrollTop: '0' }, 1000);
    });

});