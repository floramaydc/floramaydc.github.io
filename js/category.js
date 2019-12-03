var $buttons = $('.buttons').find('button');
var currentSort = 'sort-all';
var animating = false;

var products = [
  {
    "title": "New Arts",
    "category": "arts",
    "img":"images/img1.jpg"
  },
  {
    "title": "Staff Favorites",
    "category": "arts",
    "img":"images/img3.jpg"
  },
  {
    "title": "Auction",
    "category": "arts",
    "img":"images/img5.jpg"
  },
  {
    "title": "Discounted",
    "category": "arts",
    "img":"images/img7.jpg"
  },
  {
    "title": "Top Artists",
    "category": "artists",
    "img":"images/img2.jpg"
  },
  {
    "title": "Emerging Artists",
    "category": "artists",
    "img":"images/img1.jpg"
  }
  
];

var compiled = _.template(
  "<div class='box sort-<%= category %>'>" + 
    "<a href='subcategory.php'><img src='<%= img %>' /></a>" + 
    "<div class='details'>" +
      "<div class='title'><%= title %></div>" +
    "</div>" + 
  "</div>"
);

var i, toAppendString = "";

for (i = 0; i < products.length; i++) {
  toAppendString += compiled(products[i]);
}  

$(".boxes").append(toAppendString);

var $boxes = $('.boxes').find('.box');

$buttons.each(function(index){
  
  $(this).on('click', function(){
    $buttons.removeClass('active');
    if($(this).attr('data-sort') !== currentSort && !animating) {
      $(this).addClass('active');      
      currentSort = $(this).attr('data-sort');
      sortBoxes(currentSort);
    }
    
  });
  
});

function sortBoxes(sort) {
  if( sort === 'sort-all' ) {
    $boxes.filter(':visible').fadeOut(function(){
      shownext($(".box"));
    });   
  } else {
    $boxes.filter(':visible').fadeOut(function(){
      shownext($("."+sort));
    });    
  }
}

function hidenext(jq){
    jq.eq(0).fadeOut(50, function(){
        (jq=jq.slice(1)).length && hidenext(jq);
    });
    if(jq.length > 1) {
      animating = true;
    } else {
      animating = false;
    }
}

function shownext(jq){
    jq.eq(0).fadeIn(50, function(){
        (jq=jq.slice(1)).length && shownext(jq);
    });
    if(jq.length > 1) {
      animating = true;
    } else {
      animating = false;
    }
}
