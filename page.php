<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package bigbum
 */

get_header();
?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php
			// check if the repeater field has rows of data
			if( have_rows( 'slick_slide' ) ):

			echo "<ul class='slider-main'>";

			// loop through the rows of data
			while ( have_rows( 'slick_slide' ) ) : the_row();
				 $image = get_sub_field( 'slick_image' );
				 $imageUrl = $image['url'];
				 $title = get_sub_field( 'slick_title' );
				 $link = get_sub_field( 'slick_link' );

				 echo '<li class="slider-main__slide" style="background-image: url('. $imageUrl .');">
				 				<div class="slider-main__title">
									<h2 class="heading"><a href="' . $link . '">' . $title .'</a></h2>
								</div>
							</li>';

			endwhile;
			echo "</ul>";

			endif;
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
