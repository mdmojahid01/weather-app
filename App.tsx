import React from 'react';
import {View} from 'react-native';
import Application from './src/navigators/Application';

function App(): React.JSX.Element {
  return (
    <View className={'flex-1'}>
      <Application />
    </View>
  );
}

export default App;

