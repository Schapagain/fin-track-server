import React, { Component } from 'react';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { getCumulativeAmountsForCurrentMonth } from '../utils';
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
        const {days, amounts, month} = getCumulativeAmountsForCurrentMonth(transactions);
        return(
            <div>
                {amounts.length? <Plot style={{width: '100%',height: '100%'}}
                    data={[
                    {type: 'scatter', x: days, y: amounts},
                    ]}
                    layout={{
                        autosize: true,
                        title: {text: 'Your activity in '.concat(month)},
                        xaxis: {
                            title: {text: 'Days'}
                        },
                        yaxis: {
                            title: {text: 'Net transaction amounts ($)'}
                        }
                    }}
                    config={{displayModeBar:false,responsive:true}}
                    useResizeHandler={true}
                /> : <h1>You have no activity this month</h1>}
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