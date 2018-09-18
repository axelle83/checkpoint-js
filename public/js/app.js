var app = {

  game: $('#title').data('game'),

  init: function() {

    // listener on level choice ("memory" game)
    $('#level button').on('click', memory.choice);

    // listener on body ("bubbles" game)
    if ($('#title').data('id') === 1) {
      $('#bubbleGame').on('click', bubbles.checkGame);
      $('#newBubbleGame').on('click', bubbles.newGame);
    }
    $('#input').on('change',bubbles.file);

    // listener on card ("shifumi" game)
    $('.user').on('click', shifumi.choice);

    // listener on choice ("boule" game)
    $('.layout').on('click', boule.choice);
    $('#cash').html(boule.cash);
    $('#betGame').on('click', boule.bet);
    $('#newGame').on('click', boule.newGame);
  },
};

// **********************************************************
// "boule" game
// **********************************************************
var boule = {

  cash: 100,
  timer:'',
  timer2:'',
  timer3:'',

  choice: function() {
    $('.hide').show();
    var userChoice = $(this).data('id');
    $('#userChoice').html(userChoice);
    console.log(typeof(userChoice));
  },

  bet: function() {
    $('.msg').hide();
    var userBet = $('#userBet').val();
    if (userBet === '') {
      $('#noBet').show();
    } else if (userBet > boule.cash) {
      $('#errorBet').show();
    } else {
      boule.game();
    }
  },

  game: function() {
    $('.layout').off('click');
    $('#betGame').hide();
    $('#gameLoad').show();
    boule.timer = setTimeout(boule.gameover, 2000);
  },

  gameover: function() {
    $('#gameLoad').hide();
    $('#gameFinish').show();
    boule.timer2 = setTimeout(boule.gameResult, 2000);
  },

  gameResult: function() {
    $('#gameFinish').hide();
    $('#rand').show();
    var randChoice = Math.ceil(Math.random() * 9);
    $('#randChoice').html(randChoice);
    var userChoice = $('#userChoice').html();
    var userBet = $('#userBet').val();
    $('#result').show();

    if (userChoice === String(randChoice)) {
      boule.winGame(userBet, 7);
    } else {
      if (userChoice === 'impair' && (randChoice === 1 || randChoice === 3 || randChoice === 7 || randChoice === 9)) {
        boule.winGame(userBet, 1);
      } else if (userChoice === 'pair' && (randChoice === 2 || randChoice === 4 || randChoice === 6 || randChoice === 8)) {
        boule.winGame(userBet, 1);
      } else if (userChoice === 'noir' && (randChoice === 1 || randChoice === 3 || randChoice === 6 || randChoice === 8)) {
        boule.winGame(userBet, 1);
      } else if (userChoice === 'rouge' && (randChoice === 2 || randChoice === 4 || randChoice === 7 || randChoice === 9)) {
        boule.winGame(userBet, 1);
      } else if (userChoice === 'manque' && (randChoice === 1 || randChoice === 2 || randChoice === 3 || randChoice === 4)) {
        boule.winGame(userBet, 1);
      } else if (userChoice === 'passe' && (randChoice === 6 || randChoice === 7 || randChoice === 8 || randChoice === 9)) {
        boule.winGame(userBet, 1);
      } else {
        boule.lostGame(userBet, 1);
      }
    }
  },
  winGame: function(userBet, i) {
    $('#result').html('Gagné !');
    $('#win').show();
    boule.cash = boule.cash + (userBet * i);
    $('#cash').html(boule.cash);
    boule.timer3 = setTimeout(boule.next, 3000);
  },
  lostGame: function(userBet) {
    $('#result').html('Perdu...');
    boule.cash = boule.cash - userBet;
    $('#cash').html(boule.cash);
    boule.timer3 = setTimeout(boule.next, 3000);
  },
  next: function() {
    $('#userBet').val('');
    $('.msg').hide();
    $('.hide').hide();

    if (boule.cash === 0) {
      $('#noCash').show();
      $('#newGame').show();
    } else {
      $('.layout').on('click', boule.choice);
    }
  },
  newGame: function() {
    $('.layout').on('click', boule.choice);
    boule.cash = 100;
    $('#cash').html(boule.cash);
    $('.msg').hide();
  }
};

// **********************************************************
// "shifumi" game
// **********************************************************
var shifumi = {

  nbWin: 0,
  nbLost: 0,

  choice: function() {

    $('#explain').hide();
    $('#result').empty();
    var result = false;
    var $winCase = new Array();
    $winCase[0] = new Array('pierre', 'feuille', false);
    $winCase[1] = new Array('feuille', 'ciseaux', false);
    $winCase[2] = new Array('ciseaux', 'pierre', false);

    var user = $(this).data('id');
    $('#userChoice').html(user);

    var $choices = ['pierre', 'feuille', 'ciseaux'];
    var rand = $choices[Math.floor(Math.random() * $choices.length)];
    $('#randChoice').html(rand);
    if (user === rand) {
      $('#result').html('Egalité');
    } else {
      for (var i = 0; i < $winCase.length; i++) {
        if ($winCase[i][0] === user && $winCase[i][1] === rand) result = ($winCase[i][2]);
        if ($winCase[i][0] === rand && $winCase[i][1] === user) result = (!$winCase[i][2]);
      }
      if (result) {
        ($('#result').html('Tu as gagné'));
        shifumi.nbWin++;
        $('#nbWin').html(shifumi.nbWin);
      } else {
        ($('#result').html('Tu as perdu'));
        shifumi.nbLost++;
        $('#nbLost').html(shifumi.nbLost);
      }
    }
  }
};

// **********************************************************
// "bubbles" game
// **********************************************************
var bubbles = {

  choice: $('#title').data('game'),
  $nb1: 0,
  $nb2: 0,
  timer:'',

  checkGame: function() {

    if (bubbles.choice === 'name') {
      if (($('#play1').val() !== '') && ($('#play2').val() !== '')) {
        console.log('name');
        $('#gamer1').html($('#play1').val());
        $('#gamer2').html($('#play2').val());
        $('.explain').hide();
        bubbles.timer = setTimeout(bubbles.game, 500);
      }
    }
    else {
      $('.explain').hide();
      bubbles.timer = setTimeout(bubbles.game, 500);
    }
  },

  game: function() {
    $(document).on('click', bubbles.createBubble);
  },

  createBubble: function(evt) {
    // new bubble
    var $bubble = $('<div class="bubble">');

    // random
    var size = bubbles.getRandomSize();
    var color = bubbles.getRandomColor();

    // styles
    var styles= {};
    styles = {
      borderRadius: size,
      height: size,
      left: evt.pageX - size / 2,
      position: 'absolute',
      top: evt.pageY - size / 2,
      width: size,
      background: color,
      color: 'white',
      'font-size': size/5+'px',
      'font-weight': 'bold',
      'line-height': size+'px',
      'text-align': 'center',
      'vertical-align': 'middle',
    };

    $bubble.css(styles);

    // add bubble
    $bubble.appendTo('body');
    bubbles.checkBubbles();
  },

  checkBubbles: function() {

    // 20 bubbles
    if ($('.bubble').length % 20 === 0) {
      $('.explain').hide();
      $(document).off('click');
      $('#newBubbleGame').show();
      $('#nb1').html(bubbles.$nb1);
      $('#nb2').html(bubbles.$nb2);
      if (bubbles.$nb1 > bubbles.$nb2) {
        $('#player1').removeClass();
        $('#player1').addClass('text-success');
        $('#player2').removeClass();
        $('#player2').addClass('text-danger');
      } else {
        $('#player1').removeClass();
        $('#player1').addClass('text-danger');
        $('#player2').removeClass();
        $('#player2').addClass('text-success');
      }
      $('#result').show();
      // window height
      var windowHeight = $(window).height();
      // animate for each bubble
      $('.bubble').each(function() {
        var style = {
          top: windowHeight - $(this).height(),
        };
        var options = {
          duration: 2000,
          easing: 'easeOutBounce',
          complete: function() {
            // end of the animation : fadeOut
            $(this).fadeOut();
          },
        };
        $(this).animate(style, options);
      });
    }
  },

  newGame: function() {
    $('.hide').hide();
    $('#newGame').hide();
    var timer = setTimeout(bubbles.game, 1000);
  },
  getRandomSize: function() {
    return bubbles.random(100, 200);
  },
  getRandomColor: function() {
    // rgba(125, 14, 97, 0.5);
    return 'rgba(' +
      // red = R
      bubbles.random(0, 255) +
      ',' +
      // green = G
      bubbles.random(0, 255) +
      ',' +
      // blue = B
      bubbles.random(0, 255) +
      ',' +
      // Alpha = A // opacity
      bubbles.random(50, 75) / 100 +
      ')';
  },
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

// **********************************************************
// "memory" game
// **********************************************************
var memory = {

  checkValue: [],
  cpt: 0,
  hasRight: true,
  $choice: '',
  $duration: 0,
  $nbCards: 0,
  nb: 0,
  nbW: 0,
  nbL: 0,

  choice: function() {

    // defines params for the difficulty level
    memory.$choice = $(this).attr('id');
    if (memory.$choice === 'normal') {
      memory.$duration = 2 * 60 * 1000;
      memory.$nbCards = 28;
      memory.$width = '780px';
    } else {
      memory.$duration = 4 * 60 * 1000;
      memory.$nbCards = 36;
      memory.$width = '1000px';
    }

    // base : number of cards and width
    memory.createGame(memory.$nbCards, memory.$width);

    // animate progress bar
    memory.animateProgress(memory.$duration);

    // hide
    $('#gameover').hide();
    $('#level').hide();
  },

  createGame: function(nb, larg) {
    // new game board
    var gameBoard = [];
    memory.cpt = 0;
    $('#game').empty();
    $('#game').css('width', larg);
    $('#scroll').css('width', larg);
    $('#game').show();
    $('#parties').show();

    // create cells
    for (var index = 0; index < nb; index++) {
      var cell1 = '<div class="carte">';
      var cell2 = '<div class="cache"></div>';
      // position in the sprite and put on background-position
      var position = Math.floor(index / 2) * 100;
      var cell3 = '<div class="image" data-position="' + position + '" style="background-position:left -' + position + 'px;"></div>';

      var cell = cell1 + cell2 + cell3 + '</div>';

      // add cell in the board
      gameBoard.push(cell);
    }

    //cards shuffle
    memory.shuffle(gameBoard);

    // add board
    $('#game').append(gameBoard);

    // listener on the cards
    $('.carte').on('click', memory.onClick);

    // new cell background on hover
    $('.cache').hover(function() {
      $(this).css('background-color', '#A6C1ED');
    }, function() {
      $(this).css('background-color', '#D0DBED');
    });
  },

  animateProgress: function(duration) {
    $('#progress').css('width', 0);
    // game progress
    $('#scroll').show();
    $('#progress').animate({
      width: '100%'
    }, duration, memory.gameOver);
  },

  shuffle: function(array) {

    // random shuffle
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  },

  onClick: function() {

    // click on a card
    if (memory.hasRight) {
      // show card
      $(this).children('.cache').hide();
      var $image = $(this).children('.image');
      $image.show();

      // add 1 on count
      var $click1 = $(this);
      memory.checkValue.push($click1);

      if (memory.checkValue.length === 2) {
        // count = 2 : "check" method"
        memory.check(memory.checkValue);
        memory.checkValue = [];
      }
    }
  },

  check: function(clic) {

    // check if the 2 cards are the same
    var card1 = clic[0].children('.image');
    var card2 = clic[0].children('.image');
    var position1 = clic[0].children('.image').data('position');
    var position2 = clic[1].children('.image').data('position');

    if (position1 === position2) {
      // the 2 cards are the same
      (!card1.hasClass('unable')) ? (memory.cpt += 2) : memory.cpt = memory.cpt;
      // no listener on these cards
      card1.addClass('unable');
      card2.addClass('unable');
      $('.unable').off('click', memory.onClick);

      if (memory.cpt === memory.$nbCards) {
        // all the cards are ok
        // hide progress
        $('#progress').stop();
        $('#progress').css('width', 0);
        $('#scroll').hide();

        // win message
        $('#message').html('Gagné !');
        $('#smiley').html('<i class="far fa-smile"></i>');
        $('#gameover').show();

        // one more win
        memory.nbW++;
        $('#nbWin').html(memory.nbW);
        $('#level').show();

        $('#game').hide();
      }
    } else {
      // the cards are not the same
      memory.hasRight = false;
      setTimeout(function() {
        memory.fail(clic);
      }, 1000);
    }
  },

  gameOver: function() {
    // at the end of the game / fail
    $('#game').hide();
    // hide progress
    $('#progress').stop();
    $('#progress').css('width', 0);
    $('#scroll').hide();
    // lost message
    $('#message').html('Perdu !');
    $('#smiley').html('<i class="far fa-frown"></i>');
    $('#gameover').show();
    // one more lost
    memory.nbL++;
    $('#nbLost').html(memory.nbL);
    $('#level').show();
  },

  fail: function(clic) {
    // after the timeout if the 2 cards are not the same

    // hide cards
    if (!(clic[0].children('.image')).hasClass('unable')) {
      clic[0].children('.image').hide();
      clic[0].children('.cache').show();
    }
    if (!(clic[1].children('.image')).hasClass('unable')) {
      clic[1].children('.image').hide();
      clic[1].children('.cache').show();
    }
    // click possible
    memory.hasRight = true;
  }
};

$(app.init);

// bounce effect for the game "bubbles" (http://gsgd.co.uk/sandbox/jquery/easing/)
$.extend($.easing, {
  easeOutBounce: function(x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    }
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
  }
});
