var win = $(window),
    nav = $('nav'),

    pos = nav.offset().top,
    sticky = function(){ 
      win.scrollTop() > pos ?
        nav.addClass('sticky')
      : nav.removeClass('sticky')
    }

win.scroll(sticky)