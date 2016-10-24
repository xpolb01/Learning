describe("generateWinningNumber function", function() {
    it('returns a random number between 1 and 100', function() {
        spyOn(Math, 'random').and.returnValue(0.155);
        expect(generateWinningNumber()).toEqual(16)
        Math.random.and.returnValue(0.0000034);
        expect(generateWinningNumber()).toEqual(1);
        Math.random.and.returnValue(0.9999934);
        expect(generateWinningNumber()).toEqual(100);
    });
});

describe("shuffle function", function() {
    //Use the fisher-yates Shuffle algorithm
    //Here is a great resource on the algorithm with an animation.  Read all the way to the end!
    //https://bost.ocks.org/mike/shuffle/
    it('takes an array as an argument, and returns an array', function() {
        var shuffledArray = shuffle([20, 50, 70]);
        expect(shuffledArray.length).toEqual(3);
    });
    it('shuffles an array using Math.random to place elements', function() {
        //By making Math.random deterministic, we can test the output of shuffle
        spyOn(Math, 'random').and.returnValue(0.5);
        var shuffledArray = shuffle([20, 50, 70]);
        expect(Math.random).toHaveBeenCalled();
        expect(shuffledArray).toEqual([20, 70, 50]);
    })
    it('returns the array shuffled in place', function() {
        //What does 'in place' mean?
        //It means that you are modifying the original array, not making a new array.
        var unshuffledArray = [20,50,70]
        var shuffledArray = shuffle(unshuffledArray);
        expect(shuffledArray.length).toEqual(3);
        expect(shuffledArray === shuffledArray).toEqual(true);
    })
});

describe("Game class", function() {
    var game;

    beforeEach(function() {
        game = new Game();
    });

    it('should have a playersGuess property, and a pastGuesses property ', function() {
        //playersGuess property is what will hold the player's number guess
        //pastGuesses will be an array, and holds all of the player's past guesses
        expect(game.playersGuess).toEqual(null);
        expect(Array.isArray(game.pastGuesses)).toEqual(true);
        expect(game.pastGuesses.length).toEqual(0);
    });

    it('should have a winningNumber property, which calls generateWinningNumber', function() {
        spyOn(window, 'generateWinningNumber').and.callThrough();
        game = new Game();
        expect(generateWinningNumber).toHaveBeenCalled();
        expect(typeof game.winningNumber).toEqual('number');
    });

    describe("Methods on the Game Constructor Functions `.prototype`", function() {

        describe('difference function', function() {
            it('returns the absolute value of the difference between the playersGuess and winningNumber', function() {
                game.playersGuess = 20;
                game.winningNumber = 10; //Here we are overwriting the random winningNumber so that we can test effectively
                expect(game.difference()).toEqual(10);
                game.winningNumber = 30;
                expect(game.difference()).toEqual(10);
            })
            
        });

        describe('isLower function', function() {
            it('returns true if the playersGuess is lower than winningNumber, and false if not.', function() {
                game.playersGuess = 20;
                game.winningNumber = 10; 
                expect(game.isLower()).toEqual(false);
                game.winningNumber = 30;
                expect(game.isLower()).toEqual(true);
            })
        });
        
        describe("playersGuessSubmission function", function() {
            it('takes a number as an argument and sets that as playersGuess', function() {
                game.playersGuessSubmission(42);
                expect(game.playersGuess).toEqual(42);
            });
            it('throws an error if the number is invalid (less than 1, greater than 100, or not a number)', function() {
                expect(function() {
                    game.playersGuessSubmission(0);
                }).toThrow("That is an invalid guess.");
                expect(function() {
                    game.playersGuessSubmission(-1);
                }).toThrow("That is an invalid guess.");
                expect(function() {
                    game.playersGuessSubmission(101);
                }).toThrow("That is an invalid guess.");
                expect(function() {
                    game.playersGuessSubmission("not a number");
                }).toThrow("That is an invalid guess.");
            })
            it('calls checkGuess', function() {
                spyOn(Game.prototype, 'checkGuess');
                game.playersGuessSubmission(42);
                expect(Game.prototype.checkGuess).toHaveBeenCalled();
            })
            
        })

        describe("checkGuess function", function() {
            it('returns a string', function() {
                //The last spec specifies that playersGuessSubmission should call checkGuess
                //playersGuessSubmission should also return that call, so that the return value
                //of playersGuessSubmissions is the return value of checkGuess.
                var result = game.playersGuessSubmission(42);
                expect(typeof result).toEqual('string');

            });
            it('returns "You Win!" if playersGuess equals winningGuess', function() {
                game.winningNumber = 42;
                expect(game.playersGuessSubmission(42)).toEqual('You Win!');
            });
            it('returns "You have already guessed that number." if playersGuess is in pastGuesses', function() {
                game.winningNumber = 42;
                game.playersGuessSubmission(36);
                expect(game.playersGuessSubmission(36)).toEqual('You have already guessed that number.');
            })
            it('if playersGuess isn\'t the winningNumber or a duplicate, add it to pastGuesses', function() {
                game.winningNumber = 42;
                game.playersGuessSubmission(36);
                expect(game.pastGuesses.indexOf(36)).toBeGreaterThan(-1);
            })
            it('returns "You Lose" if this is the players 5th guess', function() {
                game.winningNumber = 42;
                game.playersGuessSubmission(1);
                game.playersGuessSubmission(2);
                game.playersGuessSubmission(3);
                game.playersGuessSubmission(4);
                expect(game.playersGuessSubmission(5)).toEqual('You Lose.');
            });
            it('returns "You\'re burning up!" if the difference between playersGuess and winningGuess is less than 10', function() {
                game.winningNumber = 42;
                expect(game.playersGuessSubmission(45)).toEqual('You\'re burning up!');
            });
            it('returns "You\'re lukewarm." if the difference between playersGuess and winningGuess is less than 25', function() {
                game.winningNumber = 42;
                expect(game.playersGuessSubmission(62)).toEqual('You\'re lukewarm.');
            });
            it('returns "You\'re a bit chilly." if the difference between playersGuess and winningGuess is less than 50', function() {
                game.winningNumber = 42;
                expect(game.playersGuessSubmission(72)).toEqual('You\'re a bit chilly.');
            });
            it('returns "You\'re ice cold!" if the difference between playersGuess and winningGuess is less than 100', function() {
                game.winningNumber = 42;
                expect(game.playersGuessSubmission(92)).toEqual('You\'re ice cold!');
            });
            
        })

        describe('newGame function', function() {
            it('returns an empty, new game instance', function() {
                spyOn(window, 'Game').and.callThrough();
                game = newGame();
                expect(game.playersGuess).toEqual(null);
                expect(game.pastGuesses.length).toEqual(0);
                expect(Game).toHaveBeenCalled();
            });
        });

        describe("provideHint function", function() {
            it('generates an array with a length of 3', function() {
                var hintArray = game.provideHint();
                expect(hintArray.length).toEqual(3);
            });
            it('includes the winningNumber', function() {
                var hintArray = game.provideHint();
                expect(hintArray.indexOf(game.winningNumber)).toBeGreaterThan(-1);
            });
            it('calls generateWinningNumber to fill the rest of the hint array with random numbers', function() {
                spyOn(window, 'generateWinningNumber');
                game.provideHint();
                expect(generateWinningNumber.calls.count()).toEqual(2);
            })
            it('calls the shuffle function', function() {
                spyOn(window, 'shuffle');
                game.provideHint();
                expect(shuffle).toHaveBeenCalled();
            });
        })

    })

})