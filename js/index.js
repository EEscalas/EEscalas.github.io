// Typed

$(function(){
    $('.whoIAm').typed({
        strings: ["Software Developer", "Engineer", "Proud Bruin"],
        typeSpeed: 40,
        startDelay:800, 
        backDelay: 1000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: "|"
    });
});


jQuery(document).ready(function($) {


/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

    var myTheme = window.myTheme || {},
    $win = $( window );
    


/*
|--------------------------------------------------------------------------
| isotope
|--------------------------------------------------------------------------
|
|
|
*/      

    myTheme.Isotope = function () {
    
        // 4 column layout
        var isotopeContainer = $('.isotopeContainer');
        if( !isotopeContainer.length || !jQuery().isotope ) return;
        $win.load(function(){
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
        $('.isotopeFilters').on( 'click', 'a', function(e) {
                $('.isotopeFilters').find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({ filter: filterValue });
                e.preventDefault();
            });
        });
    
    };
    
/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/
    
    myTheme.Isotope();

});




