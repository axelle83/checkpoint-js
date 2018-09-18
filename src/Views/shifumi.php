<?php $this->layout('layout') ?>

<h1 id="title">Pierre, feuille, ciseaux</h1>

<!-- win and lost -->
<div id="parties" class=" subtitle">
	<h3 class="text-success">Nombre de parties gagnées : <span id="nbWin"></span></h3>
	<h3 class="text-danger">Nombre de parties perdues : <span id="nbLost"></span></h3>
</div>

<!-- game -->
<div class="container">
    <div class="row">
        <div class="col-5">
            <h3 class="subtitle">Joueur</h3>
            <img class="user" data-id="pierre" src="public/images/pierre.jpg" alt="">
            <img class="user" data-id="feuille" src="public/images/feuille.jpg" alt="">
            <img class="user" data-id="ciseaux" src="public/images/ciseaux.jpg" alt="">
        </div>
        <div class="col-2 d-flex align-items-end subtitle">
            <h3 id="explain small">Cliquer sur une carte pour lancer le jeu</h3>
        </div>
        <div class="col-5">
            <h3 class="subtitle">Ordinateur</h3>
            <img class="rand" data-id="pierre" src="public/images/pierre.jpg" alt="">
            <img class="rand" data-id="feuille" src="public/images/feuille.jpg" alt="">
            <img class="rand" data-id="ciseaux" src="public/images/ciseaux.jpg" alt="">
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="user-choice col-5 text-center subtitle">
            <h3>Tu as choisi :</h3>
            <h3 id="userChoice" class=""></h3>
        </div>
        <div class="col-2 d-flex align-items-center">
            </div>
        <div class="col-5 text-center subtitle">
            <h3>L'ordinateur a choisi :</h3>
            <h3 id="randChoice" class=""></h3>
        </div>
    </div>
</div>

<!-- result -->
<div class="subtitle">
    <h3 id="result"></h3>
</div>
