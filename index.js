/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import HomeScreen from './HomeMain/HomeScreen/HomeScreen';
import Logins from './HomeMain/Login/Logins';

AppRegistry.registerComponent(appName, () => Logins);
