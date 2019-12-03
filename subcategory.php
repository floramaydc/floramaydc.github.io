<?php include('inc/header.php'); ?>

<!--
//Main Categories: Arts, Artists
//Arts - Subcategories: New Arts, Staff Favorites, Auction, Discounted
//Artists - Subcategories: Top Artists, Emerging Artists
//Filter by 1)Style 2)Medium 3)Price 4)Subjects 5)Color 6)Orientation 7)Size
-->
<div class="about">
<section id="filterby" style="width: 30%; font-size: 12px; float: left;">
    <span class="sorters" data-filter="*"><b>Filter by</b></span>
    <ul>Style
        <li>Impressionism</li>
        <li>Abstract</li>
        <li>Expressionism</li>
        <li>Realism</li>
        <li>Modern</li>
        <li>Classical</li>
        <li>Pop</li>
        <li>Surrealism</li>
        <li>Minimalism</li>
        <li>Vintage</li>
        <li>Street Art</li>
        <li>Contemporary</li>
        <li>Primitive</li>
    </ul>
    <ul>Medium
        <li class="sorters" data-filter=".vert">Oil Painting</li>
        <li>Acrylic Painting</li>
        <li>Photography</li>
        <li>Mixed Media Artwork</li>
        <li>Watercolor Painting</li>
        <li>Printmaking</li>
        <li>Drawing Artwork</li>
        <li>Other Media</li>
        <li>Sculpture</li>
        <li>Digital Printmaking</li>
    </ul>
    <ul>Price
        <li>Under $500</li>
        <li>$500-$1000</li>
        <li>$1000-$2000</li>
        <li class="sorters" data-filter=".rouge">$2000-$5000</li>
        <li>Over $5000</li>
    </ul>
    <ul>Subjects
    <li>Landscape</li> 
    <li>People</li>
    <li>Nature</li>
    <li>Architecture</li>
    <li>Seascape</li>
    <li>Flora</li>
    <li>Animals</li>
    <li>Travel</li>
    <li>Still Life</li>
    <li>Fantasy</li>
    <li>Nudes</li>
    <li>Cuisine</li>
    <li>Fashion</li>
    <li>Western</li>
    <li>Sports</li> 
    </ul>
    <ul>Colors
       <li>Green</li> 
       <li>Black</li> 
       <li>White</li>
       <li>Blue</li>
       <li>Brown</li>
       <li>Orange</li>
       <li>Grey</li>
       <li>Red</li>
       <li>Beige</li>
       <li>Yellow</li>
       <li>Turquoise</li>
       <li>Dark Blue</li>
       <li>Pink</li>
       <li>Dark Green</li>
       <li>BW</li>
       <li>Violet</li>
       <li>Purple</li>
       <li>Dark Red</li>
    </ul>
    <ul>Orientation
    <li>Horizontal</li>
    <li>Vertical</li>
    <li>Square</li></ul>
</section>

<section id="artpieces" style="width: 65%; float: right;">
<!--<div>
  <h3 class="sorters" data-filter="*">Sorter 1</h3>  
  <h3 class="sorters" data-filter=".vert">Sorter 2</h3>
  <h3 class="sorters" data-filter=".rouge">Sorter 3</h3>
</div>-->

<div id="elements-grid">
  <a href="product.php"><article class="element-item vert">
  </article></a>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
   <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
  <article class="element-item vert">
  </article>
  <article class="element-item rouge">
  </article>
    <article class="element-item vert">
  </article>
</div>
</section>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src='https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.min.js'></script>
<script src="js/sub-category.js"></script>
</div>
<?php include('inc/footer.php'); ?>
