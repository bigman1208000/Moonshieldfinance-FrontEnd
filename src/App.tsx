import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import MobileMenu from './components/MobileMenu'
import ModalsProvider from './contexts/Modals'
import TokenContractProvider from './contexts/TokenContractProvider'
import { lightTheme } from './theme'
import Home from './views/Home'
import Dashboard from './views/Dashboard'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.bodycolor};
  }
`
const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  return (
    <Providers>
      <TokenContractProvider>
        <Router>
          <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </TokenContractProvider>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    // <div style={{ backgroundImage: `url(${backgroundImg})` }}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <UseWalletProvider
          chainId={56}
          connectors={{
            walletconnect: { rpcUrl: 'https://bsc-dataseed.binance.org/' },
          }}
        >
          <ModalsProvider>{children}</ModalsProvider>
        </UseWalletProvider>
    </ThemeProvider>
    // </div>
  )
}

export default App
