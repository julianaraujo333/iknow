<!DOCTYPE html>
<html>

<head>
  <title>What she knows</title>

  <!-- <base href="/" /> -->

  <meta name="robots" content="noindex">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <meta charset="utf-8" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta http-equiv="Cache-Control" content="no-cache, no-store" />
  <meta http-equiv="Pragma" content="no-cache, no-store" />

  <meta name="description" content="Esse Repositório tem como finalidade centralizar todos os conteúdos de estudo da autora em um único lugar, facilitando na hora de revisitar algo." />
  <meta name="author" content="Juliana Araujo">
  <meta name="copyright" content="Juliana Araujo" />
  <meta name="url" content="https://github.com/julianaraujo333" />
  <meta name="identifier-URL" content="#" />

  <meta property="og:title" content="" />
  <meta property="og:type" content="website">
  <meta property="og:url" content="#" />
  <meta property="og:locale" content="pt-br">
  <meta property="og:site_name" content="" />
  <meta property="og:description" content="" />

  <meta property="og:image" content="./assets/img/imagem-de-compartilhamento.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:site" content="" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:image" content="./assets/img/imagem-de-compartilhamento.png" />

  <!-- Cannocical -->
  <link rel="canonical" href="#">

  <!-- FAVICON -->
  <link rel="icon" href="./assets/img/favicon/favicon.png" sizes="32x32" />

  <!-- Animate.css -->
  <link rel="stylesheet" type="text/css" href="./assets/vendor/animate.css/animate.min.css" media="screen" />

  <!-- Font Awesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900;&display=swap" rel="stylesheet">

  <!-- CSS projeto -->
  <link rel="stylesheet" type="text/css" href="../assets/css/style.min.css?<?=date("dmyhis")?>" media="screen, print" />


</head>

<body class="post-structure">
  <a class="skip-link" href='#main'>Skip to content</a>
  <div class="fullscreen">
    <header class="container">
      <a href="../index.php"><img src="../assets/img/duck.svg" alt="What she knows"></a>

      <nav role="navigation">
        <h2><a href="./sass.php"> SASS</a></h2>
        <ul>
          <li class="current"><a href="#">Gulpfile.js</a></li>
          <!-- <li><a href="./seo-podcast.php">Podcast</a></li>
          <li><a href="./seo-certification.php">Certificações</a></li> -->
        </ul>
      </nav>
    </header>

    <main id="main" role="main">
      <div class="container gulpfile">
        <p>
          <a href="https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles/" rel=”nofollow” target="_blank">Gulpfile DOCS</a>
          <a href="https://www.youtube.com/watch?v=q0E1hbcj-NI" rel=”nofollow” target="_blank">Tutorial</a>
        </p>

        <div class="steps">
            <div class="step">
              <h2>Instalar o gulp globalmente no computador</h2>
              <p>npm install --global gulp-cli</p>
              <small>Em cada projeto individual será preciso instalar o Gulp novamente</small>
            </div>
            <div class="step">
              <h2>Será necessario criar um Package.json no projeto</h2>
              <p>npm init -y</p>
            </div>
            <div class="step">
              <h2>Instalar os pacotes necessarios</h2>
              <p>npm install gulp gulp-sass gulp-postcss cssnano gulp-terser browser-sync</p>
            </div>
            <div class="step">
              <h2>Criar um novo arquivo gulpfile.js</h2>
              <div class="code-area">
                <pre>
                      const { src, dest, watch, series } = require('gulp');
                      const sass = require('gulp-sass');
                      const postcss = require('gulp-postcss');
                      const cssnano = require('cssnano');
                      const terser = require('gulp-terser');
                      const browsersync = require('browser-sync').create();

                      // Sass Task
                      function scssTask(){
                        return src('app/scss/style.scss', { sourcemaps: true })
                          .pipe(sass())
                          .pipe(postcss([cssnano()]))
                          .pipe(dest('dist', { sourcemaps: '.' }));
                      }

                      // JavaScript Task
                      function jsTask(){
                        return src('app/js/script.js', { sourcemaps: true })
                          .pipe(terser())
                          .pipe(dest('dist', { sourcemaps: '.' }));
                      }

                      // Browsersync Tasks
                      function browsersyncServe(cb){
                        browsersync.init({
                          server: {
                            baseDir: '.'
                          }
                        });
                        cb();
                      }

                      function browsersyncReload(cb){
                        browsersync.reload();
                        cb();
                      }

                      // Watch Task
                      function watchTask(){
                        watch('*.html', browsersyncReload);
                        watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
                      }

                      // Default Gulp task
                      exports.default = series(
                        scssTask,
                        jsTask,
                        browsersyncServe,
                        watchTask
                      );
                </pre>
              </div>
            </div>
        </div>
      </div>
    </main>
  </div>
</body>

</html>