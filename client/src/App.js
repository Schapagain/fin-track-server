import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TransactionList from './components/TransactionList';

import { Provider } from 'react-redux';
import store from './store';
import AddTransaction from './components/AddTransaction';
import ViewThisMonth from './components/ViewThisMonth';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <Row>
            <AddTransaction />
          </Row>
          <Row className="pb-3">
            <Col xs="12" sm="12" md="12" lg="6">
              <TransactionList />
            </Col>
            <Col xs="12" sm="12" md="12" lg="6">
              <ViewThisMonth />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
