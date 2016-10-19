#Event Emitter

Event emitter as it sounds is just something that triggers an event to which anyone can listen. Different libraries offer different implementations and for different purposes, but the basic idea is to provide a framework for issuing events and subscribing to them.

This demonstrates all the basic functionality of an EventEmitter. The on or addListener method (basically the subscription method) allows you to choose the event to watch for and the callback to be called. The emit method (the publish method), on the other hand, allows you to "emit" an event, which causes all callbacks registered to the event to 'fire', (get called).
