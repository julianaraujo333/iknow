<html>
  <head>
    <title>Hero Header: Level Up your CSS Animation</title>
    <!-- The default layout, resets and and text styling -->
    <link href="stylesheets/main.css" rel="stylesheet">
    <!-- Custom styling for the header -->
    <link href="stylesheets/header.css" rel="stylesheet">
    <link href="stylesheets/touch-and-hover.css" rel="stylesheet">
    <link href="stylesheets/tooltip.css" rel="stylesheet">
    <link href="stylesheets/cards.css" rel="stylesheet">

  </head>
  <body>
    <header>
      <section class="header-content">
        <img src="images/rocky-dashed.svg" class="rocky-dashed animate-pop-in">
        <h1 class="header-title animate-pop-in">Your awesome landing page</h1>
        <h3 class="header-subtitle animate-pop-in">A useful start for your projects</h3>
        <p class="header-button animate-pop-in"><a href="#calls-to-action" class="button-header">Get started today</a></p>
      </section>
      <section class="header-down-arrow">
        <img src="images/downarrow.png" width="50">
      </section>
    </header>

    <section class="touch-and-hover">
      <article class="content">
        <p>... and here is some text. This text shows how <a href="https://cssanimation.rocks/#fresh" title="learn more about animating in the browser" class="anchor-tooltip">CSS animation</a> can help us make links be more fun and useful...</p>
      </article>
    </section>

    <a href="./cards.php">Cards</a>
    <a href="./buttons.php">buttons</a>

    <script>
      // Prepare the body tag by adding a "js-paused" class
      document.body.className += " js-loading";

      // Listen for when everything has loaded
      window.addEventListener("load", showPage, false);

      function showPage() {
        // Remove the "js-paused" class
        document.body.className = document.body.className.replace("js-loading","");
      }
    </script>
    <script src="./js/tooltip.js"></script> 
  </body>
</html>
