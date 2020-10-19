import React, { Component } from 'react';
import moment from 'moment';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';
import Plot from 'react-plotly.js';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import { connect } from 'react-redux';

class ViewThisMonth extends Component {

    state = {
        modal: false,
        days: [],
        amounts: [],
    }

    componentDidMount() {
        this.props.getTransactions();

    }

    handleToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render(){
        let { transactions } = this.props.transactionReducer;

        // Filter transactions for this month
        transactions = 
        transactions
            .filter( transaction => moment(transaction.dateObj).month() === moment().month())
            .map( transaction => ({day: moment(transaction.dateObj).date(), type: transaction.type, amount: transaction.amount}))
        
        // Sort transactions in ascending order of date
        transactions.sort((a,b) => a.day-b.day);
        let days = [0].concat(transactions.map(transaction => transaction.day));

        // Get cumulative transactions
        // adding or subtracting based on transaction type
        let cumulativeAmounts = [0];
        for (let i = 0; i < transactions.length; i++){
            cumulativeAmounts[i+1] = transactions[i].type === 'income'? cumulativeAmounts[i] + transactions[i].amount: cumulativeAmounts[i] - transactions[i].amount
        }

        return(
            <div>
                <Button color="dark" onClick={this.handleToggle}>View this month</Button>
                <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalHeader toggle={this.handleToggle}>Transactions this month</ModalHeader>
                    <ModalBody>
                    <Plot
                        data={[
                        {type: 'scatter', x: days, y: cumulativeAmounts},
                        ]}

                        config={{displayModeBar:false}}
                    />
                    </ModalBody>
                </Modal>
          </div>
        );
    }
}

ViewThisMonth.propTypes = {
    getTransactions: propTypes.func.isRequired,
    transactionReducer: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    transactionReducer: state.transactionReducer
});

export default connect(mapStateToProps, { getTransactions })(ViewThisMonth);