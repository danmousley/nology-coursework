import React from 'react';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <Routes />
      </section>
    </>
  )
}

export default App
