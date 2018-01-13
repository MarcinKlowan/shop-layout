$('a.star').ready(function() {
    
        $('a.star').mouseenter(function(){
            if($(this).hasClass('klik') === false) {
                $(this).prevAll().addClass('star1');
                $(this).addClass('star1');
                $(this).prevAll().html('&#9733;'); // podmiana tekstu
                $(this).html('&#9733;'); // podmiana tekstu
            }
            // to zostawiamy puste - samo niespelnienie warunku
            // spowoduje pominiecie akcji
        });
    
    
        $('a.star').mouseleave(function() {
            if($(this).hasClass('klik') === false) {
            $(this).prevAll().removeClass('star1'); // zmienia kolor usuniece klase
            $(this).removeClass('star1'); // zmienia kolor poprzez usuniece klasy
    
            $(this).prevAll().html('&#9734;'); // podmiana tekstu
            $(this).html('&#9734;'); // podmiana tekstu
              } 
        });
       
       
        $('a.star').click(function(){
            if ( $(this).siblings('.klik').length > 0 ) {
                
                $(this).siblings('.klik').html('&#9734;');
                $(this).siblings('.klik').removeClass('klik');

                $(this).html('&#9734;');
                $(this).removeClass('klik');
               
               $(this).prevAll().removeClass('star1');
               $(this).removeClass('star1');
            } else {
                $(this).prevAll().toggleClass('klik');
                $(this).toggleClass('klik');
                $(this).prevAll().removeClass('star1');
                $(this).removeClass('star1');
     
                $(this).prevAll()
                $(this).nextAll().removeClass('klik');

                $(this).prevAll().html('&#9733;'); // podmiana tekstu
                $(this).html('&#9733;'); // podmiana tekstu
    
            }
        });
    
    });