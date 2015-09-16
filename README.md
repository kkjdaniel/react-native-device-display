# react-native-device-display
A simple way to create dynamic views through device and display detection, allowing the creation of adaptable and universal apps. Currently only for React Native iOS, [Android](https://github.com/kkjdaniel/react-native-device-display/issues/10) support in progress.

[![GitHub issues](https://img.shields.io/github/issues/kkjdaniel/react-native-device-display.svg)](https://github.com/kkjdaniel/react-native-device-display/issues)
[![Version](https://img.shields.io/npm/v/react-native-device-display.svg)](https://www.npmjs.com/package/react-native-device-display)
[![Downloads](https://img.shields.io/npm/dm/react-native-device-display.svg)](https://www.npmjs.com/package/react-native-device-display)


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

```javascript
Display.percentage(type, value);
```

Returns in `pixels` the percentage value of type `width` or `height`

```javascript
Display.isTablet();
```

Returns `true` if the the device is a tablet (e.g iPad)

```javascript
Display.isPhone();
```

Returns `true` if the the device is a phone (e.g iPhone)

```javascript
Display.isPortrait();
```

Returns `true` if the the device is in a portrait position

```javascript
Display.isLandscape();
```

Returns `true` if the the device is in a landscape position

```javascript
Display.onOrientationDidChange(handler)
```

Triggers the `handler` call-back when the orientation changes

## Properties

```javascript
Display.width
```

Width in `pixels` of the display

```javascript
Display.height
```

Height in `pixels` of the display

## Example

```javascript
var Display = require('react-native-device-display');
var listener;

var testing = React.createClass({

  componentDidMount: function() {
    listener = Display.onOrientationDidChange(function() {
      //Change States, Perform Magic, etc...
    });
  },

  componentWillUnmount: function() {
    //Unlisten the onOrientationChange...
    listener = null;
  },
  
  render: function() {
    if (Display.isPortrait()) {
      //Return portrait view...
    } else if (Display.isLandscape()) {
      //Return landscape view...
    } 
    //Add as many conditions and views as you see fit...
  }
  
});
```
