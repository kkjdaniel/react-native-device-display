# react-native-device-display
A simple way to create dynamic views through device and display detection, allowing the creation of adaptable and universal apps.

## Installation
Simply install the package as shown below...
```install
$ npm install react-native-device-display
```
Then require it in your project wherever you need it...
```require
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

## TO-DO
- Add `EventListener` for orientation / dimension change
