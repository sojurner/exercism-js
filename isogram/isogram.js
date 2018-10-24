function Isogram(str) {
  this.str = str;
}

Isogram.prototype.isIsogram = function() {
  var initialStr = this.str.replace(/é/g, 'e');
  var modifiedA = initialStr.replace(/À/g, 'a');
  var modifiedE = modifiedA.replace(/à/g, 'a');
  var filteredStr = modifiedE.replace(/[\W_\d]+/g, '');
  var strArr = filteredStr.toLowerCase().split('');
  var bool = true;
  strArr.reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      bool = false;
    }
    console.log(obj);
    return obj;
  }, {});

  return bool;
};

module.exports = { Isogram };
