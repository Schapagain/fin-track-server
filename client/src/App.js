import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TransactionList />
    </div>
  );
}

export default App;
