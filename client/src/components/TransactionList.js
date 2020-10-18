import React,{Component} from 'react';
import { Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import {v4 as uuid} from 'uuid';
import AddTransaction from './AddTransaction';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Transaction = props => {
    const {transaction} = props;
    return(
        <Row className="transaction mb-1">
            <div className="col-3">{transaction.date}</div>
            <div className="col-6">{transaction.title}</div>
            <div className="col-3">{transaction.amount}</div>
        </Row>
    )
}

class TransactionList extends Component {
    state={
        transactions: [
            {id: uuid(), amount: '$14',title: 'La cena',category: "Food", date: '2020-10-10'},
            {id: uuid(), amount: '$23',title: 'El almuerzo', category: "Education", date: '2020-10-12'}
        ]
    }

    handleNewTransaction = state => {
        this.setState({
            transactions: [state,...this.state.transactions]
        })
    }

    render(){
        return (
            <Container  id="main-panel">
                <Row id = "add-transaction">
                    <AddTransaction handleNewTransaction={this.handleNewTransaction}/>
                </Row>
                <p className="text-center text-white"><u>Posted Transactions</u></p>
                <ListGroup id="transaction-list" className="mb-3">
                    <TransitionGroup>
                        {this.state.transactions.map(transaction => (
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

export default TransactionList;