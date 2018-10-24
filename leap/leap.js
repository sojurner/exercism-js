function Year(num) {
  this.num = num;
}

Year.prototype.isLeap = function() {
  return (this.num % 4 === 0 && this.num % 100 !== 0) || this.num % 400 === 0
    ? true
    : false;
};

module.exports = { Year };
