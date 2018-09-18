<?php $this->layout('layout') ?>

<h1 id="title">Jeu de la boule</h1>

<!-- game -->
<div id="casino" class="container p-2">
    <div class="row justify-content-md-center">
        <div class="col-4">
            <h3 class="subtitle explain">Règles du jeu</h3>
            <p class="small">Il s'agit de deviner sur quel numéro et quelle couleur la boule va s'arrêter dans le cylindre numéroté deux fois de 1 à 9</p>
                <h5 class="text-primary mark">Miser sur les numéros</h5>
                    <p>Gain = 7 fois la mise</p>
                <h5 class="text-primary mark">Jouer les chances simples</h5>
                    <p>Gain = 1 fois la mise</p>
                    <p class="small">Noir : numéros 1, 3, 6, 8</p>
                    <p class="small">Rouge : numéros 2, 4, 7, 9</p>
                    <p class="small">Pair : numéros 2, 4, 6, 8</p>
                    <p class="small">Impair : numéros 1, 3, 7, 9</p>
                    <p class="small">Manque : numéros 1, 2, 3, 4</p>
                    <p class="small">Passe : numéros 6, 7, 8, 9</p>
        </div>
        <div class="col-4">
            <img class="img-fluid img-thumbnail rounded"src="public/images/roue-boule.png" alt="">
            <div id="layout" class="m-auto" >
                <img  class="img-fluid img-thumbnail rounded-bottom" src="public/images/la-boule-layout.png" alt="">
                <div id="manque" data-id="manque" class="layout"></div>
                <div id="passe" data-id="passe" class="layout"></div>
                <div id="noir" data-id="noir" class="layout"></div>
                <div id="rouge" data-id="rouge" class="layout"></div>
                <div id="pair" data-id="pair" class="layout"></div>
                <div id="impair" data-id="impair" class="layout"></div>
                <div id="un" data-id="1" class="layout number"></div>
                <div id="deux" data-id="2" class="layout number"></div>
                <div id="trois" data-id="3" class="layout number"></div>
                <div id="quatre" data-id="4" class="layout number"></div>
                <div id="cinq" data-id="5" class="layout number"></div>
                <div id="six" data-id="6" class="layout number"></div>
                <div id="sept" data-id="7" class="layout number"></div>
                <div id="huit" data-id="8" class="layout number"></div>
                <div id="neuf" data-id="9" class="layout number"></div>
            </div>
            <p class="small">Cliquez là où vous souhaitez miser</p>
        </div>
        <div class="col-4">
            <div class="subtitle">
                A vous de choisir et de miser
            </div>
            <div id="" class="row text-primary m-2 p-2">
                <div class="col2 offset-2 text-left">
                    <h5>Mes jetons : </h5>
                    <h5 class="hide">J'ai misé sur : </h5>
                    <h5 class="hide">Je mise : </h5>
                </div>
                <div class="col-2">
                    <h5 id="cash"></h5>
                    <h5 id="userChoice" class="hide"></h5>
                    <h5><input id="userBet" class="bg-transparent hide" type="text" name="" value=""></h5>
                </div>
            </div>
            <input id="betGame" type="button" class="btn btn-primary hide" value="Je mise !">
            <h3 id="errorBet" class="text-danger msg">Impossible de miser plus que ses jetons !</h3>
            <h3 id="noBet" class="text-danger msg">Vous avez oublié de miser !</h3>
            <h3 id="gameLoad" class="text-warning msg">Les jeux sont faits...</h3>
            <h3 id="gameFinish" class="text-danger msg">Rien ne va plus !</h3>
            <h3 id="rand" class="bg-primary text-white msg">Le numéro est le : <span id="randChoice"></span></h3>
            <h3 id="result" class="text-primary msg"><span id=""></span></h3>
            <img id="win" src="public/images/gain.jpg" class="msg" alt="">
            <h3 id="noCash" class="bg-danger text-white msg">Il n'y a plus de jetons disponibles</h3>
            <input id="newGame" type="button" class="btn btn-primary msg" value="Nouveau jeu">
        </div>
    </div>
</div>

<!-- result -->
<div class="subtitle">
    <h3 id="result"></h3>
</div>
