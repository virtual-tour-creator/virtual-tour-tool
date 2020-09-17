<!DOCTYPE html>
<html lang="en">
<head>
    <?php wp_head(); ?>
    <!-- <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Museum Live</title> -->
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
      </button>
      <a class="navbar-brand" href="/">PATRIMONIO NACIONAL</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
      <?php if(is_user_logged_in()) { ?>
        <li><a class="btn-with-image" href="<?php echo wp_logout_url(); ?> ">
        <span id="site_header__avatar"><?php echo get_avatar(get_current_user_id(), 20);  ?></span>
        <span>Logout <i class="fas fa-user-plus"></i></a></li></span>
        <?php } else { ?>
            <li><a href="<?php echo wp_registration_url(); ?> ">Signup <i class="fas fa-user-plus"></i></a></li>
            <li><a href="<?php echo wp_login_url(); ?>">Login <i class="fas fa-user"></i></a></li>
        <?php } ?>
        
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>