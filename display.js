var Dimensions = require('Dimensions');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

class Display {

  updateProps(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
  
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

  isPortrait() {
    if (this.width < this.height) {
      return true;
    } else {
      return false;
    }
  }

  isLandscape() {
    if (this.width > this.height) {
      return true;
    } else {
      return false;
    }
  }

  isTablet() {
    if ((this.width > 760 || this.height > 899) && this.isPortrait()) {
      return true;
    } else if ((this.width > 899 || this.height > 760) && this.isLandscape()) {
      return true;
    } else {
      return false;
    }
  }

  isPhone() {
    if ((this.width <= 760 || this.height <= 899) && this.isPortrait()) {
      return true;
    } else if ((this.width <= 899 || this.height <= 760) && this.isLandscape()) {
      return true;
    } else {
      return false;
    }
  }

  onOrientationDidChange(handler) {
    var main = this;
  	RCTDeviceEventEmitter.addListener(
  		'orientationDidChange',
  		function(newDimensions) {
        main.updateProps(newDimensions.width, newDimensions.height);
        handler();
      }
    );
  }

}

module.exports = new Display();