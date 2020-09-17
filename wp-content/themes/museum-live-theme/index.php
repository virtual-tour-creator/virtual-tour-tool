<?php get_header(); ?>

<div class="jumbotron" style="background-image:url(https://www.thefrickpittsburgh.org/Files/User/Frick-623_preview.jpg); background-size:cover; margin-top: 0;">
	<div class="row">
		<div class="col-lg-12">
			<div id="content">	
				<h1>Library Database</h1>
				<h3>Search bar goes here</h3>
				<hr>
				<button class="btn btn-default btn-lg">Get Started!</button>
			</div>
		<!-- 	<img src="photo-1415369629372-26f2fe60c467"> -->
		</div>
	</div>
</div> 
<div style="color: black">
	<button class="btn btn-default btn-lg">Create</button>
	<?php
		$entries = new WP_Query(array(
			"paged" => get_query_var("paged", 1),
			"posts_per_page" => 2,
			"post_type" => "entry"
		)); 
		while ($entries->have_posts()) {
			$entries->the_post(); ?>
			<li><?php the_title()?></li>
			<img src="<?php echo the_field("thumbnail")?>" width="400">
		<?php }
		echo paginate_links(array(
			"total" => $entries->max_num_pages
		));
	?>
</div>

<?php get_footer(); ?>