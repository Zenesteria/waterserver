import { Main } from '@/components'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import store from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Provider>
    </ChakraProvider>
  );
}
