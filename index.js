/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import NewApp from './NewApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NewApp);
