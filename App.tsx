import * as React from 'react';
import AppNavigator from './src/routes';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function App() {
  moment.locale('pt-br');
  return (
    <AppNavigator />
  );
}