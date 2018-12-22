<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bigbum
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="footer">
		<div class="contain grid">
			<div class="col-auto">
				<div class="site-info">
						<?php
						$theme_author = wp_get_theme( 'bigbum' )['Author'];
						$year = get_the_time( 'Y' );
						?>
						<p class="u-text-center">Copyright <?php echo $theme_author; ?>, <?php echo $year; ?></p>
				</div><!-- .site-info -->
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
