import React, { Component } from 'react';

import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import ViewThisMonth from './ViewThisMonth';
import PickDateRange from './PickDateRange';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTransactions } from '../actions/transactionActions';

class MainContainer extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  render(){
    const {isAuthenticated} = this.props.auth;
    const authContainer = (
      <Container>
            <Row>
              <AddTransaction />
            </Row>
            <Row>
              <PickDateRange />
            </Row>
            <Row className="pb-3">
              <Col xs="12" sm="12" md="12" lg="6">
                <TransactionList /> 
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
              <ViewThisMonth/>
              </Col>
            </Row>
          </Container>
    )

    const guestContainer = (
      <Container>
        <Row>
          <h1>Login or Register to begin!</h1>
        </Row>
      </Container>
    )

    return (
      <div>
          {isAuthenticated? authContainer:guestContainer}
      </div>
    );
  }
}

MainContainer.propTypes = {
  auth: propTypes.object.isRequired,
  getTransactions: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.authReducer,
  getTransactions: state.getTransactions
});

export default connect(mapStateToProps,{ getTransactions })(MainContainer);
