var Dimensions = require('Dimensions');

class Display {

  constructor() {
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
  }

  percentage(type, value) {
    if (type == 'width') {
      return value * (this.height / 100);
    } else if (type == 'height') {
      return value * (this.width / 100);
    } else {
      return 'Invalid Type (width / height)';
    }
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

  onOrientationChange(handler: function) {
    this.addEventListener('onOrientationChange', handler, false);
  );

}

module.exports = new Display();