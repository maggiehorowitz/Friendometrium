import React from 'react'
import AppContainer from './navigation'
import Firebase, { FirebaseProvider } from './config/Firebase'
import store from './src/store'
import { Provider } from 'react-redux'
console.disableYellowBox = true;


export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <Provider store = { store }>
       <AppContainer />
      </Provider>
    </FirebaseProvider>
  )
}
