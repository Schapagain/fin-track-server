import React,{Component} from 'react';
import { Container, Row } from 'reactstrap';
import {v4 as uuid} from 'uuid';
import AddTransaction from './AddTransaction';

const Transaction = props => {
    const {transaction} = props;
    return(
        <Row className="transaction p-1 mb-1">
            <div className="col-3">{transaction.date}</div>
            <div className="col-6">{transaction.title}</div>
            <div className="col-3">{transaction.amount}</div>
        </Row>
    )
}

class TransactionList extends Component {
    state={
        transactions: [
            {amount: '$14',title: 'La cena',category: "Food", date: '2020-10-10'},
            {amount: '$23',title: 'El almuerzo', category: "Education", date: '2020-10-12'}
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
                <Row id="transaction-list">
                    <div className="col-12">
                        <p className="text-center"><u>Posted Transactions</u></p>
                        {this.state.transactions.map(transaction => <Transaction key={uuid()} transaction={transaction}/>)}
                    </div>
                </Row>
            </Container>
        )
    }
}

export default TransactionList;