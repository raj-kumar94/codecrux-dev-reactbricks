import { useEffect, useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import config from '../react-bricks/config'
import { startCrispChatbox } from '../utils/chat';

import '../css/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
const router = useRouter()
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(savedColorMode || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content ${colorMode} ${
      colorMode === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`,
  }

  useEffect(() => {
	startCrispChatbox();
  }, [router.pathname])

  return (
    <ReactBricks {...reactBricksConfig}>
      <link rel="icon" type="image/png" href="favicon.ico" />
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
