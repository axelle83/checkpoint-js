<?php $this->layout('layout') ?>

<h1 id="title" data-id='1' data-game="name">Qui gagnera ?</h1>

<div class="subtitle explain">
    <div id="players" class=" mx-auto w-40 p-2">
        <label for="play1">Nom du joueur 1 : </label>
        <input type="text" id="play1" class="text-primary" name="" value="">
        <label for="play2">Nom du joueur 2 : </label>
        <input type="text" id="play2" class="text-primary" name="" value="">
    </div>

	<p class="">Le but est de faire apparaître le maximum de bulles de son joueur</p>
  <p class="">Cliquer sur l'écran pour faire apparaître 20 bulles</p>
  <input id="bubbleGame" type="button" class= "btn btn-primary" name="" value="Jouer">
</div>

<article id="result" class="hide subtitle">
	<h3 id="player1"><span id="gamer1"></span> : <span id="nb1"></span></h3>
	<h3 id="player2"><span id="gamer2"></span> : <span id="nb2"></span></h3>
	<button id="newBubbleGame" type="button" class="hide btn btn-primary">Rejouer</button>
</article>
