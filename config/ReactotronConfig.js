import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import url from 'url';

if (__DEV__) {
  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

  const tron = Reactotron.configure({ name: 'Vento', host: hostname })
    .useReactNative({ asyncStorage: false })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
