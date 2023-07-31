import 'src/styles/globals.css'
import AppLayout from './components/AppLayout'
import {DarkModeContextProvider} from 'src/context/DarkContext'

export default function App({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </DarkModeContextProvider>
  )
}
