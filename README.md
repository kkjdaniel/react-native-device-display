# react-native-device-display
A simple way to detect the devices view type and the orientation, allowing the creation of adaptable and universal apps.

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
`Display.isTablet();`
> Returns `true` if the the device is a tablet (e.g iPad)

`Display.isPhone();`
> Returns `true` if the the device is a phone (e.g iPhone)

`Display.isPortrait();`
> Returns `true` if the the device is in a portrait position 

`Display.isPortrait();`
> Returns `true` if the the device is in a landscape position

## Properties
`Display.width`
> Width in `pixels` of the device

`Display.height`
> Height in `pixels` of the device

## TO-DO
- Add `EventListener` for orientation change
