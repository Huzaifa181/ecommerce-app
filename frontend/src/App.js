import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
// import {BrowserRouter} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductScreen}/>
        </Container>
        </main>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
