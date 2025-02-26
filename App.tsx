import { ScreenContent } from 'components/ScreenContent';

import './global.css';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView
      className='flex-1 bg-red-200'
    >
      <ScreenContent title="Smart Burrito" path="App.tsx" />
      <StatusBar barStyle='default' />
    </SafeAreaView>
  );
}
