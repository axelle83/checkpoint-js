<?php $this->layout('layout') ?>

<h1 id="title">Jeu de mémoire</h1>

<!-- level choice -->
<div id="level">
	<h2 class= "subtitle">Choisir le niveau de difficulté :</h2>
	<button type="button" id="normal" class="btn btn-primary">Normal</button>
	<button type="button" id="hard" class="btn btn-primary">Difficile</button>
</div>

<!-- lost and win -->
<div id="parties" class="hide subtitle">
	<h3 class="text-success">Nombre de parties gagnées : <span id="nbWin"></span></h3>
	<h3 class="text-danger">Nombre de parties perdues : <span id="nbLost"></span></h3>
</div>

<!-- game-->
<div id="game" class="hide">
</div>

<!-- progress -->
<div id="scroll" class="hide">
	<div id="progress">
	</div>
</div>

<!-- result -->
<div id="gameover" class="hide">
	<h1 id="message"></h1>
	<h1 id="smiley"></h1>
</div>
