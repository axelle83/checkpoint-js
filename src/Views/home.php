<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>axerauju</title>
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <!-- font awesome -->
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <!-- css -->
        <link rel="stylesheet" href="<?=$baseUrl?>/public/css/style.css">
    </head>
    <body>
      <div id="home-title" class="text-uppercase">
        Family games
      </div>
      <div class="row">
        <div class="col-4 offset-2">
          <img src="<?=$baseUrl?>/public/images/jeux.jpg" alt="">
        </div>
        <div class="col-3 my-auto">
          <div class="p-2 m-2 choice">
            <a href="<?=$router->generate('memory')?>">
              Jeu de memory
            </a>
          </div>
          <div class="p-2 m-2 choice">
            <a href="<?=$router->generate('shifumi')?>">
              Pierre feuille ciseaux
            </a>
          </div>
          <div class="p-2 m-2 choice">
            <a href="<?=$router->generate('bubbles')?>">
              Bubbles
            </a>
          </div>
          <div class="p-2 m-2 choice">
            <a href="<?=$router->generate('boule')?>">
              Jeu de la boule
            </a>
          </div>
        </div>

      </div>
        <!-- footer -->
        <?php $this->insert('partials/footer') ?>

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <!-- bootstrap -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- app.js -->
        <script type="text/javascript">var BASE_PATH = "<?=$baseUrl?>";</script>
        <script type="text/javascript" src="<?=$baseUrl?>/public/js/app.js"></script>
</html>
