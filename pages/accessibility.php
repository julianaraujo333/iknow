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

  <meta property="og:title" content=" - " />
  <meta property="og:type" content="website">
  <meta property="og:url" content="#" />
  <meta property="og:locale" content="pt-br">
  <meta property="og:site_name" content=" - " />
  <meta property="og:description" content="" />

  <meta property="og:image" content="./assets/img/imagem-de-compartilhamento.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:site" content=" - " />
  <meta name="twitter:title" content=" - " />
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
        <h2>Acessibilidade</h2>
        <ul>
          <li><a href="./accessibility-videos.php">Videos</a></li>
          <li><a href="./accessibility-podcast.php">Podcast</a></li>
          <li><a href="#">Livros</a></li>
        </ul>
      </nav>
    </header>

    <main id="main" role="main">
      <ul class="container">
        <li>
          <a href="https://css-tricks.com/how-to-create-a-skip-to-content-link/" rel=”nofollow” target="_blank">Skip to Content</a>
          <div class="info">
            <span>CSS Tricks</span>
            <span>&#x2022;</span>
            <span>26 de novembro de 2022</span>
          </div>
        </li>
        <li>
          <a href="#">Tabindex</a>
          <span>25 de abril de 2022</span>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role" rel=”nofollow” target="_blank">ARIA: landmark role</a>
          <div class="info">
            <span>Mozilla</span>
            <span>&#x2022;</span>
            <span>26 de novembro de 2022</span>
          </div>
        </li>
        <li class="inside">
          <p>Em Input text é melhor fazer o uso de readonly o ao invés de disabled que ainda permite a leitura de
            leitores de tela e não permite a modificação.
          </p>
          <p>
            <code>
              &lt;input type="text" class="contatoCampo-campoDesabilitado" readonly value="Rua Vergueiro"&gt;
            </code>
          </p>
        </li>
        <li class="inside">
          <p>
            Uma alternativa de alts para SVG é o atributo title
          </p>
          <p>
            <code>
              &lt;a href="#" class="cabecalho-logo" title="Logotipo da Apeperia"&gt;
              <br> &ltsvg width="205" height="59" viewBox="0 0 205 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
              &lttitle&gt;Logotipo da Apeperia &lt; /title&gt;
              &lt;input type="text" class="contatoCampo-campoDesabilitado" readonly value="Rua Vergueiro"&gt;
            </code>
          </p>
        </li>
      </ul>
    </main>
  </div>
</body>

</html>