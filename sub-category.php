<?php include('inc/header.php'); ?>
<div class="buttons about">
    <b>Filter by</b>
  <button class="active" data-sort="sort-all">All Artworks</button>
  <button data-sort="sort-arts">Arts</button>
    <ul>
        <li><button data-sort="sort-arts-new">New Arts</button></li>
    </ul>
  <button data-sort="sort-artists">Artists</button>
</div>
<div class="wrapper"><div class="boxes"></div></div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js'></script>
<script src="js/sub-category.js"></script>

<?php include('inc/footer.php'); ?>
