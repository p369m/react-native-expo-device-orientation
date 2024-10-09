# React Native Expo Device Orientation

### A React Native Expo package for detecting device orientation changes and providing the current orientation of the device.

### It provide the orientation data using Accelerometer sensor of your device.

### It does not depend on device's screen orientation, you can get device orientation data without rotating your app screen.

## Features

- Detects device orientation changes.
- Provides the current orientation of the device.
- Lightweight and easy to use.
- Supports both Android and iOS.

## Values

- 0° = PORTRAIT_UP
- 90° = LANDSCAPE_LEFT
- -90° = LANDSCAPE_RIGHT
- 180° = PORTRAIT_DOWN

## Installation

```sh
npm i react-native-expo-device-orientation
```

## **Use In EXPO App**

1. Install the react-native-expo-device-orientation package.

```sh
npm i react-native-expo-device-orientation
```

2. Import in your project.\
   `import { useDeviceOrientation } from 'react-native-expo-device-orientation';`

3. Use in your project\
   `const orientation = useDeviceOrientation();`

### Example Code

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDeviceOrientation } from 'react-native-expo-device-orientation'; // importing

export default function App() {
const orientation = useDeviceOrientation(); // getting orientation data

// You can customize the accelerometer update interval (in milliseconds)
// by passing an object to useDeviceOrientation. The default is 1000ms (1 second).
// Example:
// const orientation = useDeviceOrientation({
//   accelerometerUpdateInterval: 100, // sets update interval to 100ms
// });
//
// Note: Starting from Android 12 (API level 31), the system has a 200ms limit for sensor updates.
// If you need an update interval less than 200ms, you should:
// - Add `android.permission.HIGH_SAMPLING_RATE_SENSORS` to the app.json permissions field.
// - If you are using the bare workflow, add <uses-permission android:name="android.permission.HIGH_SAMPLING_RATE_SENSORS"/>
//   to your AndroidManifest.xml.

return (
<View style={styles.container}>
<Text style={styles.orientationText}>Orientation: {orientation}°</Text> // 0° = PORTRAIT_UP , 90° = LANDSCAPE_LEFT , -90° = LANDSCAPE_RIGHT , 180° = PORTRAIT_DOWN
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingHorizontal: 20,
},
orientationText: {
textAlign: 'center',
marginTop: 20,
fontSize: 18,
},
});
```

## **Use In bare REACT-NATIVE App**

1. Install the react-native-expo-device-orientation package.

```sh
npm i react-native-expo-device-orientation
```

2. Import in your project.\
   `import { useDeviceOrientation } from 'react-native-expo-device-orientation';`

3. To install and use Expo modules in bare REACT-NATIVE App , the easiest way to get up and running is with the install-expo-modules command.

   ```sh
   npx install-expo-modules@latest
   ```

4. Use in your project\
   `const orientation = useDeviceOrientation();`

**info**: Your project should work perfectly, if not working properly try to reopen the project. If still not working try manual installing of [Expo modules in React Native 0.74](https://docs.expo.dev/bare/installing-expo-modules/). Manually repeating step 3.

### Example Code

```

import React from 'react';

import {

Text,

View,
} from 'react-native';

import { useDeviceOrientation } from 'react-native-expo-device-orientation';

function App(): React.JSX.Element {

const ori=useDeviceOrientation();

return (
<View>
<Text> Orientation = {ori} </Text> // 0° = PORTRAIT_UP , 90° = LANDSCAPE_LEFT , -90° = LANDSCAPE_RIGHT , 180° = PORTRAIT_DOWN
</View>
);
}

export default App;
```

- Feel free to contribute

**_NOTE_**: **Submit a Pull Request** to the `contrib-testing` branch of the main repository. All contributions will be reviewed and tested on the contrib-testing branch before being merged into main

### [GitHub](https://github.com/p369m/react-native-expo-device-orientation)

### [LinkedIn](https://www.linkedin.com/in/pm369/)
