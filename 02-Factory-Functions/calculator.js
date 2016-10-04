var createCalculator = function() {
  return {
      result: 0,
      value: function() {
        return this.result;
      },
      add: function(num) {
        this.result += num;
      },
      subtract: function(num) {
        this.result -= num;
      }
  };
};