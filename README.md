# react-native-device-display
A simple way to create dynamic views through device and display detection, allowing the creation of adaptable and universal apps.

[![npm version](https://badge.fury.io/js/react-native-device-display.svg)](http://badge.fury.io/js/react-native-device-display)
[![GitHub issues](https://img.shields.io/github/issues/kkjdaniel/react-native-device-display.svg)](https://github.com/kkjdaniel/react-native-device-display/issues)
[![GitHub license](https://img.shields.io/badge/license-GPLv2-blue.svg)](https://raw.githubusercontent.com/kkjdaniel/react-native-device-display/master/LICENSE)
[![GitHub license](https://img.shields.io/npm/v/react-native-device-display.svg)](https://www.npmjs.com/package/react-native-device-display)
[![GitHub license](https://img.shields.io/npm/dm/react-native-device-display.svg)](https://www.npmjs.com/package/react-native-device-display)


![Example GIF Demo](http://i.imgur.com/RKYZf3i.gif)

## Installation

Simply install the package as shown below...
```sh
$ npm install react-native-device-display
```

Next in order to access the `Event Listener` and `Device Type` methods you need to import the `DisplayDeviceUtil` classes into your project, these come bundled inside the NPM package.

![Classes Installation Visual](http://i.imgur.com/vT2qGfr.png)

Then require it in your project wherever you need it...
```javascript
var Display = require('react-native-device-display');
```

## Methods

`Display.percentage(type, value);`
> Returns in `pixels` the percentage value of the type `width` or `height`

`Display.isTablet();`
> Returns `true` if the the device is a tablet (e.g iPad)

`Display.isPhone();`
> Returns `true` if the the device is a phone (e.g iPhone)

`Display.isPortrait();`
> Returns `true` if the the device is in a portrait position 

`Display.isLandscape();`
> Returns `true` if the the device is in a landscape position

`Display.onOrientationChange(handler)`
> Triggers the `handler` call back when the orientation of the device changes as well as updating the dimension properties

## Properties

`Display.width`
> Width in `pixels` of the display

`Display.height`
> Height in `pixels` of the display

## Example

Simple Implementation (without Event Listener)...

```javascript
var Display = require('react-native-device-display');

var testing = React.createClass({

  render: function() {
    if (Display.isPhone() && Display.isPortrait()) {
      return (
        //Portrait Phone View...
      );
    } else if (Display.isPhone() && Display.isLandscape()) {
      return (
        //Landscape Phone View...
      );
    } else {
      return (
        //Non-Phone / Tablet View...
      );
    }
  }
  
});
```

With Event Listener...

```javascript
var Display = require('react-native-device-display');

var testing = React.createClass({

  componentDidMount: function() {
    Device.onOrientationDidChange(function() {
      //Change States, Perform Magic, etc...
    });
  }

});
```