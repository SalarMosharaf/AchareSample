import React from 'react';
import './App.css';


import {Blog, blog , Features, features , Footer, footer , Header, header , Posibility, posibility} from './containers';
import {Article , Feature , Navbar} from './components';



const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
        <Navbar />   
        <Header />
    </div>

    <Footer/>
    <Posibility/>
    <Blog/>
    <Features/>
    <Article/>
    <Feature/>

    <h1> Hello </h1>

    </div>
  )
}

export default App