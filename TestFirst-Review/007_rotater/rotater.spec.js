describe('Rotater', function () {

	it('takes a string and returns a function', function () {
		var result = rotater('');
		expect(result).toEqual(jasmine.any(Function));
	});

	it('the function it returns takes a number and returns a string', function () {
		var rotate = rotater('');
		var result = rotate(0);
		expect(result).toEqual(jasmine.any(String));
	});

	it('the returned function returns the original string rotated by the given number', function () {
		var rotate = rotater('abcde');
		expect(rotate(1)).toEqual('bcdea');
		expect(rotate(2)).toEqual('cdeab');
		expect(rotate(3)).toEqual('deabc');
		expect(rotate(4)).toEqual('eabcd');
		expect(rotate(5)).toEqual('abcde');
	});

	it('once told to rotate fully will afterwards rotate in the other direction', function () {
		var rotate = rotater('helloWORLD');

		expect(rotate(1)).toEqual('elloWORLDh'); // same as before
		expect(rotate(2)).toEqual('lloWORLDhe'); // same as before

		rotate(10); // max value triggers rotation reversal

		expect(rotate(1)).toEqual('DhelloWORL');
		expect(rotate(2)).toEqual('LDhelloWOR');
		expect(rotate(6)).toEqual('oWORLDhell');

		rotate(10); // max value triggers rotation reversal

		expect(rotate(1)).toEqual('elloWORLDh');
		expect(rotate(2)).toEqual('lloWORLDhe');
		expect(rotate(6)).toEqual('ORLDhelloW');
	});

	it('ditto, but with a different string', function () {
		var rotate = rotater('a-bunch-of-letters!');

		expect(rotate(1)).toEqual('-bunch-of-letters!a'); // same as before
		expect(rotate(2)).toEqual('bunch-of-letters!a-'); // same as before

		rotate(19); // max value triggers rotation reversal

		expect(rotate(3)).toEqual('rs!a-bunch-of-lette');
		expect(rotate(5)).toEqual('ters!a-bunch-of-let');
		expect(rotate(7)).toEqual('etters!a-bunch-of-l');

		rotate(19); // max value triggers rotation reversal

		expect(rotate(3)).toEqual('unch-of-letters!a-b');
		expect(rotate(5)).toEqual('ch-of-letters!a-bun');
		expect(rotate(7)).toEqual('-of-letters!a-bunch');
	});

});