describe('MyEventEmitter', function(){
  var eventEmitter;


  beforeEach(function(){
    eventEmitter = new MyEventEmitter();
  });

  it('is an object', function(){
    expect(typeof eventEmitter).toEqual('object');
  });

  it('has an "events" property', function(){
    expect(eventEmitter.hasOwnProperty('events')).toEqual(true);
    expect(typeof eventEmitter.events).toEqual('object');
  });

  it('has an "addListener" and "emit" property on its prototype', function(){
    expect(eventEmitter.hasOwnProperty('addListener')).toEqual(false);
    expect(eventEmitter.hasOwnProperty('emit')).toEqual(false);
    expect(typeof MyEventEmitter.prototype.addListener).toEqual('function');
    expect(typeof MyEventEmitter.prototype.emit).toEqual('function');
  });

  it('stores an "event" and a callback function in an Array', function(){
    eventEmitter.addListener('greet', function(name){
      return "Hello, " + name + "!";
    });

    expect(Array.isArray(eventEmitter.events.greet)).toEqual(true);

    var handlerFunction = eventEmitter.events.greet[0];

    expect(handlerFunction('Scott')).toEqual('Hello, Scott!');
  });

  it('stores multiple "callback" functions for a single event', function(){
    eventEmitter.addListener('greet', function(name){
      return "Hello, " + name + "!";
    });

    eventEmitter.addListener('greet', function(){
      return "How are you?";
    });

    expect(Array.isArray(eventEmitter.events.greet)).toEqual(true);
    expect(eventEmitter.events.greet.length).toEqual(2);
    expect(typeof eventEmitter.events.greet[0]).toEqual('function');
    expect(typeof eventEmitter.events.greet[1]).toEqual('function');

  });

  it('stores multiple events', function(){
    eventEmitter.addListener('greet', function(name){
      return "Hello, " + name + "!";
    });

    eventEmitter.addListener('bye', function(name){
      return "Bye, " + name + "!";
    });

    eventEmitter.addListener('shout', function(phrase){
      return phrase.toUpperCase() + "!";
    });

    expect(Object.keys(eventEmitter.events)).toEqual(['greet', 'bye', 'shout']);

  });


  it("the 'emit' property invokes the event listener for the specified event", function(){
    var greetingString = "",
        expression;
    eventEmitter.addListener('greet', function(name){
      greetingString += "Hello, " + name + "!";
    });

    eventEmitter.addListener('greet', function(timeOfDay){
      expression = "Good " + timeOfDay;
    });

    eventEmitter.emit('greet', ['Shanna'],["Evening"]);

    expect(greetingString).toEqual('Hello, Shanna!');
    expect(expression).toEqual("Good Evening");

  });

  it('the emit function invokes each callback\'s apply method', function(){

    var callback = function(name){
      return "Hello, " + name + "!";
    };

    spyOn(callback, 'apply').and.callThrough();

    eventEmitter.addListener('greet', callback);

    eventEmitter.emit('greet', ["Scott"]);

    expect(callback.apply).toHaveBeenCalled();

  });

  it('the "emit" property invokes all callback functions for the specified event', function(){
    var values = [];

    eventEmitter.addListener('greet', function name(name){
      values.push("Hello, " + name + "!");
    });

    eventEmitter.addListener('greet', function phrase(){
      values.push("How are you?");
    });

    eventEmitter.emit('greet', ['Patrick']);
    expect(values).toEqual([ 'Hello, Patrick!', 'How are you?' ]);

  });

});
