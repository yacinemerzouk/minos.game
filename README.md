Minos :: Minotaur Kings
=======================

Minos :: Minotaur Kings is a ridiculous game in which minotaurs compete 
in medieval football through mazes to claim the title of king... 
Oh! And you don't see the games being played and you don't know how it 
works so you have to read the code and/or do statistical analysis to 
improve your team. It's going to be terrible. 

Try it. 

Reading The Code :: Where To Start
==================================

Here are a few tidbits that might help you figure out how my awful code works:

* This game is written is HTML, CSS, and JavaScript.
* HTML is the markup language that browser read and display.
* CSS is a style sheet language that makes my HTML look pretty(ish).
* JavaScript is a programming language that makes this game interactive.
* There's no single entry point for the app code - I use (and love) Meteor's
   autoloading of files - but you should check out this file to start:
   `/client/layouts/generic-layout.html`
  
Other, slightly more technical things of note:

* This game is built with a fantastic JavaScript framework called Meteor (more on this later).
* This game is built with the Less preprocessor for my CSS stuff - the way I use it,
  it's 99% identical to css, so don't sweat it, just know that my `.less` files
  are pretty almost the same as your typical `.css` files.
* It runs on a Mongo database. You won't be able to see the database collections
  but knowing this might help you understand the code.
  
Ok, as I was saying, start here:
`/client/layouts/generic-layout.html`

Ridiculous Idea :: 99% Open Source
==================================

All the code of this game is open source except a single file:
the Minos Engine, which determines who wins games
and why. You'll be able to infer and understand a lot
of the game's inner working by reading the code,
but some of it will remain a mystery. You must play
the game and send your team in the arena to see
what happens.

Random Notes :: What The Hell Is Going On Here?
===============================================

This is a side project that I started to test out new HTML/JS/CSS concepts
I come across. I'm just having fun here, so I want to warn you that
playing this game will have you wonder "what the hell is going on here?" - a lot.

If you're having fun with the game, please tell your friends about it. You can
also check out my actual real games that pay my actual bills at
[societyofcuriosities.com](https://www.societyofcuriosities.com)


