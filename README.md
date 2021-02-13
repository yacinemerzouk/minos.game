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

