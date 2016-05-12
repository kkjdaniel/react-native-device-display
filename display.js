var {
  Dimensions,
  DeviceEventEmitter,
  NativeModules
} = require('react-native');

var DeviceUtil = NativeModules.DisplayDeviceUtil;

class Display {

  updateProps(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  constructor() {
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    //Enable console messages by changing to true: Display.verbose = true
    this.verbose = false;
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
    return DeviceUtil.isTablet;
  }

  isPhone() {
    return DeviceUtil.isPhone;
  }

  onOrientationDidChange(handler) {
    var main = this;
    return DeviceEventEmitter.addListener(
      'orientationDidChange',
      function(newDimensions) {
        main.updateProps(newDimensions.width, newDimensions.height);
        var orientation = main.updateOrientation(newDimensions.orientation);
        handler(newDimensions.width, newDimensions.height, orientation);
      }
    );
  }
  updateOrientation(orientation) {
    var o = {};
    switch (orientation) {
      case 1:
        o = {
          current: 'portrait',
          idle: false,
          facing: ''
        };
        break;
      case 2:
        o = {
          current: 'portrait',
          idle: false,
          facing: ''
        };
        break;
      case 3:
        o = {
          current: 'landscape',
          idle: false,
          facing: ''
        };
        break;
      case 4:
        o = {
          current: 'landscape',
          idle: false,
          facing: ''
        };
        break;
      case 5:
        o = {
          current: this.orientation.current,
          idle: true,
          facing: 'up'
        };
        break;
      case 6:
        o = {
          current: this.orientation.current,
          idle: true,
          facing: 'down'
        };
        break;
    }
    if (this.verbose) {
      console.log('Orientation Updated');
      console.log(o);
    }
    this.orientation = o;
    return o;
  }
}

module.exports = new Display();
