import React,{Component} from 'react';
import { Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';

const Transaction = props => {
    const {transaction} = props;
    return(
        <Row className="transaction">
            <div className="col-3">{transaction.date}</div>
            <div className="col-6">{transaction.title}</div>
            <div className="col-3">{transaction.amount}</div>
        </Row>
    )
}

class TransactionList extends Component {

    componentDidMount() {
        this.props.getTransactions();
    }

    render(){
        const { transactions } = this.props.transactionReducer;
        return (
            <Container id="main-panel">
                <p className="text-center text-white"><u>Posted Transactions</u></p>
                <ListGroup id="transaction-list">
                    <TransitionGroup>
                        {transactions.map(transaction => (
                            <CSSTransition key={transaction.id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Transaction transaction={transaction}/>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

TransactionList.propTypes = {
    getTransactions: propTypes.func.isRequired,
    transactionReducer: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    transactionReducer: state.transactionReducer
});

export default connect(mapStateToProps, { getTransactions })(TransactionList);