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
	<!-- Button trigger modal -->
	<button class="btn btn-default btn-lg" data-toggle="modal" data-target="#entry-info-panel">
	  Create
	</button>
	<div class="entry-display">
		<?php
			$entries = new WP_Query(array(
				"paged" => get_query_var("paged", 1),
				"posts_per_page" => 5,
				"post_type" => "entry"
			)); 
			while ($entries->have_posts()) {
				$entries->the_post(); ?>
				<li><?php the_title()?></li>
				<img src="<?php the_post_thumbnail_url("entry-thumbnail")?>" width="400">
			<?php }
			echo paginate_links(array(
				"total" => $entries->max_num_pages
			));
		?>
	</div>	
</div>


<!-- Modal Popup-->
<div class="modal popup" id="entry-info-panel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Create New Entry</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="entry-title" class="col-form-label">Title</label>
            <input type="text" class="form-control" id="entry-title" required>
          </div>
          <div class="form-group">
		    <label for="entry-file-upload">File Upload</label>
		    <input type="file" class="form-control-file" id="entry-file-upload">
		  </div>
          <div class="form-group">
            <label for="entry-desc" class="col-form-label">Description</label>
            <textarea class="form-control" id="entry-desc" required></textarea>
          </div>
          <div class="form-group">
            <label for="entry-tags" class="col-form-label">Related Topic Tags</label>
            <input type="text" class="form-control" id="entry-tags">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger delete-entry">
        	<!-- trash icon -->
        	<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
			  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
			</svg>
			Delete
        </button>
        <button type="submit" class="btn btn-primary create-entry">Save</button>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>