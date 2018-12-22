<div class="col-auto">
  <div class="products-list__card">
    <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url( 'productCard' ); ?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>" /></a>
    <div class="card-body u-margin-top-small">
      <h3 class="tertiary-heading"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
    </div>
    <div class="flex-footer">
      <?php
      $priceRegular = get_field( 'product_price_regular' );
      $priceDiscount = get_field( 'product_price_discounted' );

      if( $priceDiscount ) { ?>
        <p class="products-list__price products-list__price--discounted"><?php echo $priceRegular . ' €'; ?></p>
        <p class="products-list__price"><?php echo $priceDiscount . ' €'; ?></p>
      <?php } else { ?>
        <p class="products-list__price"><?php echo $priceRegular . ' €'; ?></p>
      <?php } ?>
    </div>
  </div>
</div>
