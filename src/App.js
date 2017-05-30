import React, { Component } from 'react';
import Homepage from './components/home/Homepage.js';
import Header from './components/Header.js';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  
  render() {
    return (
      <div className="appContainer">
        <Header />
        <Grid fluid>
          <Row center="sm">
            <Col xs={12} sm={9}><Homepage /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
