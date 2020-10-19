import React, { Component } from 'react';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { getCumulativeAmountsForCurrentMonth } from '../utils';
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
        const { transactions } = this.props.transactionReducer;
        const {days, amounts} = getCumulativeAmountsForCurrentMonth(transactions);
        return(
            <div>
                <Button color="dark" onClick={this.handleToggle}>View this month</Button>
                <Modal className="modal-lg" isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalHeader toggle={this.handleToggle}>Transactions this month</ModalHeader>
                    <ModalBody>
                    <Plot
                        data={[
                        {type: 'scatter', x: days, y: amounts},
                        ]}
                        labels={{
                            "sepal_length": "Sepal Length (cm)",
                            "sepal_width": "Sepal Width (cm)",
                            "species": "Species of Iris"
                        }}
                        layout={{
                            xaxis: {
                                title: {text: 'Days'}
                            },
                            yaxis: {
                                title: {text: 'Net transaction amounts ($)'}
                            }
                        }}
                        config={{displayModeBar:false,responsive:true}}
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