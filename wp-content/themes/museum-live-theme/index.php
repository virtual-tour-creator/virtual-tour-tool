<?php get_header(); ?>

<div class="jumbotron">
	<div class="row">
		<div class="col-lg-12">
			<div id="content">	
				<h1>Library Database</h1>
				<form class="form-inline mr-auto">
					<input class="form-control mr-sm-2" type="text" placeholder="What are you looking for?" aria-label="Search">
					<button class="btn btn-elegant btn-rounded btn-sm my-0" type="submit">Search</button>
				</form>
			</div>
		<!-- 	<img src="photo-1415369629372-26f2fe60c467"> -->
		</div>
	</div>
</div> 
<div style="color: black">
	<!-- Button trigger modal -->
	<button class="btn btn-default btn-lg" data-toggle="modal" data-target="#entry-creation-panel">
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
				<div class="entry-group" data-id="<?php the_ID()?>">
					<li><?php the_title()?></li>
					<input type="Image" id="index-thumbnail" src="<?php the_post_thumbnail_url("entry-thumbnail")?>" width="400" data-toggle="modal" data-target="#entry-info-panel">
				</div>
			<?php }
			echo paginate_links(array(
				"total" => $entries->max_num_pages
			));
		?>
	</div>	
</div>

<!-- Modal Popup-->
<div class="modal popup" id="entry-creation-panel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
        <button type="submit" class="btn btn-primary create-entry" data-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>


<div class="modal popup" id="entry-info-panel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">View Entry</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="entry-view-title" class="col-form-label">Title</label>
            <input type="text" class="form-control" id="entry-view-title" required readonly>
          </div>
          <div class="form-group">
		    <label for="entry-file-upload">Media</label>
		    <input type="file" class="form-control-file" id="entry-file-upload" readonly>
		  </div>
          <div class="form-group">
            <label for="entry-view-desc" class="col-form-label">Description</label>
            <textarea class="form-control" id="entry-view-desc" required readonly></textarea>
          </div>
          <div class="form-group">
            <label for="entry-tags" class="col-form-label">Related Topic Tags</label>
            <input type="text" class="form-control" id="entry-tags" readonly>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger delete-entry" data-dismiss="modal">
        	<!-- trash icon -->
        	<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
			  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
			</svg>
			Delete
        </button>
        <button type="button" class="btn btn-primary edit-entry">Edit</button>
        <button type="submit" class="btn btn-primary update-entry">Save</button>
      </div>
    </div>
  </div>
</div>


<div id="list-container">
	<p class='tag'> #Royal Collections</p>
    <div class="row">
		<div class="col-md-12">
                <div id="Carousel1" class="carousel slide">
                 
                <ol class="carousel-indicators">
                    <li data-target="#Carousel1" data-slide-to="0" class="active"></li>
                    <li data-target="#Carousel1" data-slide-to="1"></li>
                    <li data-target="#Carousel1" data-slide-to="2"></li>
                </ol>
                 
                <!-- Carousel items -->
                <div class="carousel-inner">
                    
                <div class="item active">
                	<div class="row">
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                <div class="item">
                	<div class="row">
					<div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                <div class="item">
                	<div class="row">
					<div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                </div><!--.carousel-inner-->
                  <a data-slide="prev" href="#Carousel1" class="left carousel-control">‹</a>
                  <a data-slide="next" href="#Carousel1" class="right carousel-control">›</a>
                </div><!--.Carousel-->
                 
		</div>
	</div>
</div><!--.container-->

<div id="list-container">
	<p class='tag'> #Spaces</p>
    <div class="row">
		<div class="col-md-12">
                <div id="Carousel2" class="carousel slide">
                 
                <ol class="carousel-indicators">
                    <li data-target="#Carousel2" data-slide-to="0" class="active"></li>
                    <li data-target="#Carousel2" data-slide-to="1"></li>
                    <li data-target="#Carousel2" data-slide-to="2"></li>
                </ol>
                 
                <!-- Carousel items -->
                <div class="carousel-inner">
                    
                <div class="item active">
                	<div class="row">
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                <div class="item">
                	<div class="row">
					<div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                <div class="item">
                	<div class="row">
					<div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
					  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	  <div class="col-md-2"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
                	</div><!--.row-->
                </div><!--.item-->
                 
                </div><!--.carousel-inner-->
                  <a data-slide="prev" href="#Carousel2" class="left carousel-control">‹</a>
                  <a data-slide="next" href="#Carousel2" class="right carousel-control">›</a>
                </div><!--.Carousel-->
                 
		</div>
	</div>
</div><!--.container-->


<?php get_footer(); ?>