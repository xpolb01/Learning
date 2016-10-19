describe('Filter', function () {

	it('takes an array and a function and returns an array', function () {
		var result = filter([], function () {});
		expect(result).toEqual(jasmine.any(Array));
	});

	it('does not use native Array.prototype.filter', function () {
		spyOn(Array.prototype, 'filter').and.callThrough();
		filter(['a', 'b', 'c', 'stuff'], function () {});
		expect(Array.prototype.filter).not.toHaveBeenCalled();
	});

	it('uses the function to narrow the result', function () {
		function isString (x) {
			return typeof x === 'string';
		}
		var arr = [1, 'a', 20, {}, 'foo', 'bar', 13];
		var result = filter(arr, isString);
		expect(result).toEqual(['a', 'foo', 'bar']);
	});

	it('works for other matching functions', function () {
		function isLessThanFifty (n) {
			return n < 50;
		}
		var arr = [7, 441, -83, 1, 2, 3, 51];
		var result = filter(arr, isLessThanFifty);
		expect(result).toEqual([7, -83, 1, 2, 3]);
	});

	it('does not modify the original', function () {
		function isString (x) {
			return typeof x === 'string';
		}
		var arr = [1, 'a', 20, {}, 'foo', 'bar', 13];
		var copyOfArr = arr.slice();
		var result = filter(arr, isString);
		expect(arr).toEqual(copyOfArr);
	});

});