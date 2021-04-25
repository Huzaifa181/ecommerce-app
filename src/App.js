import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
        <main className='py-3'>
          <Container>
            <h1>Welcome to Proshop</h1>
          </Container>
        </main>
      <Footer/>
      </>
  );
}

export default App;
