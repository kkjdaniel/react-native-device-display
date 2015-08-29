var { NativeModules } = require('react-native');

var DeviceUtil = NativeModules.DisplayDeviceUtil;
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

class Display {

  updateProps(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  constructor() {
    this.width = DeviceUtil.initialDimensions.width;
    this.height = DeviceUtil.initialDimensions.height;
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
    return RCTDeviceEventEmitter.addListener(
      'orientationDidChange',
      (/*newDimensions*/) => {
        // Not sure why, but sometimes dimensions is not updated. But asking
        // again, it always seems to be correct.
        this.getFrameSize((newDimensions) => {
          main.updateProps(newDimensions.width, newDimensions.height);
          handler();
        });
      }
    );
  }

  dimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }

  getFrameSize(cb) {
    DeviceUtil.getFrameSize(cb);
  }
}

module.exports = new Display();
