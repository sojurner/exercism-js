function Pangram(str) {
  this.str = str;
}

Pangram.prototype.isPangram = function() {
  if (this.str === '') {
    return false;
  }
  var filteredStr = this.str.replace(/[\W_\d]+/g, '');
  var strArr = filteredStr.toLowerCase().split('');
  let arr = [];
  var uniqueLetters = strArr.reduce((count, letter) => {
    if (typeof letter === 'number') {
      return;
    }
    if (!arr.includes(letter)) {
      arr.push(letter);
    }
    count = arr.length;
    return count;
  }, 0);

  return uniqueLetters < 26 ? false : true;
};

module.exports = { Pangram };
