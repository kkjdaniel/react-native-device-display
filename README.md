# react-native-device-display
A simple way to create dynamic views through device and display detection, allowing the creation of adaptable and universal apps.

![Example Screenshot](http://pasteboard.co/1DdomEXV.png "Querying the Display Example")

## Installation

Simply install the package as shown below...
```sh
$ npm install react-native-device-display
```
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

## Properties

`Display.width`
> Width in `pixels` of the device

`Display.height`
> Height in `pixels` of the device

## Example

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

## TO-DO
- Add `EventListener` for orientation / dimension change
