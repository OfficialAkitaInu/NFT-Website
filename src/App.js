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
import Winner from './pages/winner';

import ConnectModal from './components/ConnectModal';
import WalletConnectModal from './components/WalletConnectModal';

function App() {
  const location = useLocation();

  return (
    <>
      <Switch location={location}>
        <Route exact path='/'>
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path='/collection'>
          <Navbar />
          <NFT />
          <Footer />
        </Route>
        <Route path='/faq'>
          <Navbar />
          <FAQ />
          <Footer />
        </Route>
        <Route path='/winner/:id'>
          <Navbar />
          <Winner />
        </Route>
      </Switch>
      <ConnectModal />
      <WalletConnectModal />
    </>
  );
}

export default App;
