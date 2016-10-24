###Overview

In this section of the Guessing Game Project, you will be using Test Driven development to build out the functions that you'll need for the functionality of your Guessing Game.

You'll be using an Object-Oriented Approach in this project. In object oriented programming, objects are used as an abstraction of something we want to describe or manipulate. In this project, we will use objects to represent an instance of a game. 

First, you'll need to create a constructor function, Game, that will create your game instances. You'll define all the methods that can modify or read data from game on Game.prototype. You'll also need a couple of helper functions that are not defined on Game.prototype, but will be used inside the instance methods.

When you're finished you'll have the following functions:
 - Game
 - Game.prototype.playersGuessSubmission
 - Game.prototype.checkGuess
 - Game.prototype.difference
 - Game.prototype.isLower
 - Game.prototype.provideHint
 - generateWinningNumber
 - newGame
 - shuffle

###Steps

This assignment is in the style of Test First. To start, fork and clone this repository to your local machine. 

1. Fork this repository
2. `git clone https://github.com/YOURUSERNAME/guessingGame-Part2`
3. `touch GuessingGame.js`
3. `testem`
3. Write the necessary functions to pass all the Jasmine test specs
4. `git add .` Add your changes to the staging area.
5. `git commit -m 'finished guessing game part 2'` Make a commit of your work.
5. `git push master origin` Push your work up to your remote Fork.

This project may have specs you haven't seen before. Take a look at [these introductory Jasmine](http://jasmine.github.io/2.0/introduction.html) docs to familiarize yourself with more of the Jasmine specs. Also, remember that you can disable describe blocks and it blocks by putting an 'x' before the test. For example:
```
xdescribe('this won\'t run', function() {...});
```

In Foundations Part 4, you'll get Guessing Game Part 3. Part 3 will link these functions to your existing HTML and CSS files using jQuery!
