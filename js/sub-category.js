//Main Categories: Arts, Artists
//Arts - Subcategories: New Arts, Staff Favorites, Auction, Discounted
//Artists - Subcategories: Top Artists, Emerging Artists
//Filter by 1)Style 2)Abstract 3)Medium 5)Price 6)Medium 7)Subjects 8)Price 9)Color 10)Orientation 11)Size
$(document).ready(function(){
  
  var $grid = $('#elements-grid').isotope({
      itemSelector: '.element-item'
   });

   $('.sorters').on( 'click', function() {
      var filterValue = $( this ).attr('data-filter');
      $grid.isotope({ filter: filterValue });      
   });
});