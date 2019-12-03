<?php include('inc/header.php'); ?>
<section id="art-photos">
    <div class="w3-content" style="max-width:1200px">
        <div class="btnarea"><div class="topleft"><h1 class="arttitle">HTML Ipsum Presents</h1></div>
        <div class="topright"><button class="button addtocart" id="myBtn">Add to Cart</button></div></div>
        <!-- Modal Box Here-->
        <!-- Trigger/Open The Modal -->

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Your Cart</h2>            
            <ol class="progress">
              <li class="is-active" data-step="1">
                Shopping Cart
              </li>
              <li class="progress__last" data-step="2">
                Information
              </li>
              <li class="progress__last" data-step="3">
                Confirmation
              </li>
              <li data-step="4" class="progress__last">
                Complete
              </li>
            </ol>
        </div>
        <div class="modal-body"><br>This artwork is added to your cart.<br><br>
            <img src="images/img1a.jpg" alt="" style="width: 60%;" /><br>
            <b>HTML Ipsum Presents</b> by <i>Maria Cassandra de la Luna</i><br>
            Oil Painting<br>48" h x 36" w x .1" d<br>20 lbs. 0 oz.<br>$2,250<br>SHIPS FREE<br>
            <a href="subcategory.php">Continue Shopping</a><br><br>
            <a href="subcategory.php">Login</a> | <a href="subcategory.php">Create Account</a> | <a href="cart.php">Checkout as Guest</a>
            <br><br>
        </div>
        <div class="modal-footer">
            <h3>HTML Ipsum Presents</h3>
        </div>
      </div>

    </div>

    <script>
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    </script>
    <!--End Modal Box-->
      <img class="mySlides" src="images/img1a.jpg" style="width:100%">
      <img class="mySlides" src="images/img1b.jpg" style="width:100%">
      <img class="mySlides" src="images/img1.jpg" style="width:100%">    
  <div class="w3-row-padding w3-section">
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="images/img1a.jpg" style="width:100%" onclick="currentDiv(1)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="images/img1b.jpg" style="width:100%" onclick="currentDiv(2)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="images/img1.jpg" style="width:100%" onclick="currentDiv(3)">
    </div>
  </div>
</div>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
</script>
    <div class="center">
        <h4>
        <br>Oil Painting
        <br>48" h x 36" w x .1" d
        <br>20 lbs. 0 oz.
        <br><b>$2,250</b><br>SHIPS FREE</h4>
    </div>
    <p class="about">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
</section>
<section id="artist-profile"><hr>
    <div class="w3-content" style="max-width:1200px">        
        <h1>The Artist</h1>
        <img class="profile" src="images/artist.jpg" alt=""/>
        <a href=#><h3>Maria Cassandra de la Luna</h3></a>
        <div class="artist"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.<br><br>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    </div></div>
    <div class="clearfix"></div>
</section>


<?php include('inc/footer.php'); ?>
