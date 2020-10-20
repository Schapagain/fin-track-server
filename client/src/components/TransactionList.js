import React,{Component} from 'react';
import { ListGroup, ListGroupItem, Row } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';

const Transaction = props => {
    const {transaction} = props;
    return(
        <Row className={`transaction transaction-${transaction.type}`}>
            <div className="col-3">{transaction.date}</div>
            <div className="col-6">{transaction.title}</div>
            <div className="col-3">{'$'+transaction.amount}</div>
        </Row>
    )
}

class TransactionList extends Component {

    componentDidMount() {
        this.props.getTransactions();
    }

    render(){
        const { transactions } = this.props.transactions;
        return (
            <div id="main-panel">
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
            </div>
        )
    }
}

TransactionList.propTypes = {
    getTransactions: propTypes.func.isRequired,
    transactions: propTypes.object.isRequired
}

export default connect(null, { getTransactions })(TransactionList);