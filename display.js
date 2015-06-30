var Dimensions = require('Dimensions');

class Display {

  constructor() {
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
  }

  isTablet() {
    if (this.width > 899 || this.height > 899) {
      return true;
    } else {
      return false;
    }
  }

  isPhone() {
    if (this.width <= 899 || this.height <= 899) {
      return true;
    } else {
      return false;
    }
  }

  isPortrait() {
    if (this.width > this.height) {
      return true;
    } else {
      return false;
    }
  }

  isLandscape() {
    if (this.width < this.height) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = new Display();