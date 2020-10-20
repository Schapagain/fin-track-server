import React, { Component } from 'react';

import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import ViewThisMonth from './ViewThisMonth';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import propTypes from 'prop-types';

class MainContainer extends Component {

  render(){

    const {isAuthenticated} = this.props.auth;
    const authContainer = (
      <Container>
            <Row>
              <AddTransaction />
            </Row>
            <Row className="pb-3">
              <Col xs="12" sm="12" md="12" lg="6">
                {this.props.transactions.length? <TransactionList transactions={this.props.transactions}/> : null}
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
              {this.props.transactions.length? <ViewThisMonth />: null}
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
  transactions: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.authReducer,
  transactions: state.transactionReducer
});

export default connect(mapStateToProps,{})(MainContainer);
