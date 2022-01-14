import React from 'react';

import {
  Switch,
  Route,
  useLocation } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/home';
import NFT from './pages/nft';
import FAQ from './pages/faq';

import ConnectModal from './components/ConnectModal';
import WalletConnectModal from './components/WalletConnectModal';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Switch location={location}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/collection'>
          <NFT />
        </Route>
        <Route path='/faq'>
          <FAQ />
        </Route>
      </Switch>
      <Footer />
      <ConnectModal />
      <WalletConnectModal />
    </>
  );
}

export default App;
