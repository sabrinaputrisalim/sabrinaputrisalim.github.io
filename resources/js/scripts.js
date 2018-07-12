cssVars();

$('.nav-prompt').click(function () {

    if ($('.nav-inner').attr('aria-expanded') == 'false' ) {
        $('.nav-inner').attr('aria-expanded', 'true');
    } else {
        $('.nav-inner').attr('aria-expanded', 'false');
    }

    if ($('.nav-prompt').text() == 'Open Navigation') {
        $('.nav-prompt').text('Close Navigation');
    } else {
        $('.nav-prompt').text('Open Navigation');
    }

});

/* nav active class */

function activeMenu() {

    var url = window.location.href; // the page we are on 

    $('.nav-inner a').filter( function() {

        //this .href is looking through the nav items 
        return this.href == url;
    }).addClass('active');
}

activeMenu();

/* image gallery */

function imageGallery() {
    
    if (!$('.image-gallery').length) {
        return;
    }

    $('.image-gallery a').simpleLightbox();
}

imageGallery(); 