<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>

<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/wp-content/themes/react-theme/logo-words.png" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@400;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and /wp-content/themes/react-theme in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (/wp-content/themes/react-theme) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "/wp-content/themes/react-theme/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <title>Museum.Live</title>
<link href="/wp-content/themes/react-theme/static/css/0.chunk.css?b9cd33d6724a9af07dd5" rel="stylesheet"><link href="/wp-content/themes/react-theme/static/css/main.chunk.css?b9cd33d6724a9af07dd5" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>

    

    <!-- <nav class="navbar navbar-dark">

      <a class="navbar-brand" href="/">PATRIMONIO NACIONAL</a>

      <div class="navbar-dark">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a href=" ">Logout</a>
            </li>
            <li class="nav-item">
              <a href='/wp-admin'>Go to <span><</span>'s' Dashboard</a>
            </li>
        </ul>     
      </div>
      
    </nav> -->
    <div id="root"></div>
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script>
       window.reactInit = {
         loginUrl: "<?php echo wp_login_url(); ?>",
         logoutUrl: "<?php echo wp_logout_url(); ?>",
         username: "<?php echo $current_user->display_name; ?>",
         nonce: "<?php echo wp_create_nonce("wp_rest"); ?>",
         searchStopTagUrl: "<?php echo admin_url('edit.php?post_type=stop&tag='); ?>",
         searchMediaUrl: "<?php echo admin_url('upload.php?search='); ?>",
         adminUrl: "<?php echo admin_url(); ?>"
       };

    </script>
    <script src="https://kit.fontawesome.com/91b7b285ec.js" crossorigin="anonymous"></script>
    <script src="/wp-content/themes/react-theme/static/js/bundle.js?b9cd33d6724a9af07dd5"></script><script src="/wp-content/themes/react-theme/static/js/0.chunk.js?b9cd33d6724a9af07dd5"></script><script src="/wp-content/themes/react-theme/static/js/main.chunk.js?b9cd33d6724a9af07dd5"></script></body>
</html>
