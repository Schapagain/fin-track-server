import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TransactionList from './components/TransactionList';

import { Provider } from 'react-redux';
import store from './store';
import AddTransaction from './components/AddTransaction';
import ViewThisMonth from './components/ViewThisMonth';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <AddTransaction />
          <ViewThisMonth />
          <TransactionList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
