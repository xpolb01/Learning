describe('Accessor', function () {

	it('takes an object and returns a function', function () {
		var result = accessor({});
		expect(result).toEqual(jasmine.any(Function));
	});

	it('the returned function can get properties of the given object', function () {
		var accessExample;

		accessExample = accessor({a:100});
		expect(accessExample('a')).toEqual(100);

		accessExample = accessor({foobar: [7,8,9]});
		expect(accessExample('foobar')).toEqual([7,8,9]);
		expect(accessExample('a')).toEqual(undefined);
	});

	it('the returned function can set properties of the given object', function () {
		var obj = {stuff: 'something'};
		var accessExample = accessor(obj);
		
		accessExample('stuff', 'a new value');
		expect(obj.stuff).toEqual('a new value');
		
		expect(obj.newKey).toEqual(undefined);
		accessExample('newKey', Infinity);
		expect(obj.newKey).toEqual(Infinity);
	});

});