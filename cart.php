<?php include('inc/header.php'); ?>
<ol class="progress progress--medium">
  <li class="is-complete" data-step="1">
    Shopping Cart
  </li>
  <li class="is-active" data-step="2">
    Information
  </li>
  <li class="progress__last" data-step="3">
    Confirmation
  </li>
  <li data-step="4" class="progress__last">
    Complete
  </li>
</ol>
<div class="checkout-form">
<!--<div id="checkout-steps">-->
<h2>Customer Information</h2>
<br>
    <label>First Name</label><br>
        <input type="text" name="firstname" id="firstname" value="John"><br><br>
    <label>Last Name</label><br>
        <input type="text" name="lastname" id="lastname" value="Doe"><br><br>
    <label>Email Address</label><br>
	   <input type="text" name="email" id="email" value="john.doe@gmail.com">
	<br>
	<br>
<h2 id="shipinfo">Shipping Information</h2>
<br>
    <label>Street Address</label><br>
        <input type="text" name="street1" id="street1" value="Street 1"><br><br>
        <input type="text" name="street2" id="street2" value="Street 2"><br><br>
    <label>City</label><br>
	   <input type="text" name="city" id="city" value="Bonney Lake">
	<br>
	<br>
    <label>Zip Code</label><br>
	<input type="text" name="zip" id="zip" value="Zip"><br><br>
    <label>Country</label><br>
	<input type="text" name="country" id="country" value="United States">
	<br>
	<br>
<h2 id="billinfo">Billing Information</h2>
<br>
    <label>Card Number</label><br>
	<input type="text" name="card" id="card" value="Card Number"><br><br>
    <label>Expiration Date</label><br>
	<input type="text" name="exp" id="exp" value="Expiration Date"><br>
	<br>
	<br>
    <label>First Name</label><br>
	<input type="text" name="cfirst" id="cfirst" value="First Name"><br><br>
    <label>Last Name</label><br>
	<input type="text" name="clast" id="clast" value="Last Name">
	<br>
	<br>
    <label>Street</label><br>
	<input type="text" name="cstreet" id="cstreet" value="Street Address"><br><br>
    <label>City</label><br>
	<input type="text" name="ccity" id="ccity" value="City">
	<br>
	<br>
    <label>State</label><br>
	<input type="text" name="state" id="state" value="State"><br><br>
    <label>Country</label><br>
	<input type="text" name="ccountry" id="ccountry" value="Country">
	<br><br>
    <div class="center"><button class="button" id="myBtn">Continue</button></div>
	<!--<button class="center" onclick="location.href='confirm.php';">CONTINUE TO ORDER REVIEW</button>-->
</div>
 <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Order Summary</h2>
            <ol class="progress">
              <li class="is-complete" data-step="1">
                Shopping Cart
              </li>
              <li class="is-complete" data-step="2">
                Information
              </li>
              <li class="is-active" data-step="3">
                Confirmation
              </li>
              <li data-step="4" class="progress__last">
                Complete
              </li>
            </ol>
        </div>
        <div class="modal-body about">
            <h3>Artwork Information <a href="cart.php"><i class="fa fa-pencil-square-o topright" aria-hidden="true"></i></a></h3>
            <hr>
            <img src="images/img1a.jpg" alt="" style="width: 100%;" />
            <b>HTML Ipsum Presents</b> by <i>Maria Cassandra de la Luna</i><br>
            Mixed Media<br>48" h x 36" w x .1" d<br>20 lbs. 0 oz.<br>$2,250<br>SHIPS FREE<br>
            
            
                        
            <h3>Customer Information <a href="cart.php#custinfo"><i class="fa fa-pencil-square-o topright" aria-hidden="true"></i></a></h3>
            <hr>
            Name: John Doe<br>
            Email: john.doe@gmail.com<br>
            <h3>Shipping Information<a href="cart.php#shipinfo"><i class="fa fa-pencil-square-o topright" aria-hidden="true"></i></a></h3>
            <hr>
            Street: 14XXX Parkview Ct E<br>
            City: Bonney Lake<br>
            State: WA<br>
            Zip Code: 98391<br>
            Country:  United States<br>
            <h3>Billing Information <a href="cart.php#billinfo"><i class="fa fa-pencil-square-o topright" aria-hidden="true"></i></a></h3>
            <hr>
            Card Number: XXXX XXXX XXXX<br>
            Expiration Date: 10/19<br>
            Card Name: John Doe<br>
            Address: 14XXX Parkview Ct E, Bonney Lake, WA 98391, US
            <br><br>
            <hr>
            <b>Subtotal: $2,250.00</b><br>
            Tax: $225.00<br>
            <b>Total: $2,475.00</b><br><br>
            <hr>
            
            <i>To complete this transaction, please click the confirm button.</i><br>
        </div>
        <div class="modal-footer">
            <a href="complete.php" class="confirm"><h3 class="confirm">Confirm</h3></a>
        </div>
      </div>

    <!--</div>-->
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
<?php include('inc/footer.php'); ?>