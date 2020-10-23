import React, { Component } from 'react';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { getCumulativeAmounts } from '../utils';
import { connect } from 'react-redux';
import moment from 'moment';

class ViewTransactionPlot extends Component {

    state = {
        modal: false,
        days: [],
        amounts: [],
    }

    handleToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render(){
        const { transactions } = this.props.transactionReducer;
        const { days, amounts } = getCumulativeAmounts(transactions);
        const { startDate, endDate } = this.props.filterReducer;
        return(
            <div>
                {amounts.length? <Plot style={{width: '100%',height: '100%'}}
                    data={[
                    {type: 'scatter', x: days, y: amounts},
                    ]}
                    layout={{
                        autosize: true,
                        title: {text: `Your activity from ${moment(startDate).format('MMM Do')} to ${moment(endDate).format('MMM Do')}`},
                        yaxis: {
                            title: {text: 'Net transaction amounts ($)'}
                        }
                    }}
                    config={{displayModeBar:false,responsive:true}}
                    useResizeHandler={true}
                /> : <h1>You have no activity in the chosen time range</h1>}
          </div>
        );
    }
}

ViewTransactionPlot.propTypes = {
    getTransactions: propTypes.func.isRequired,
    transactionReducer: propTypes.object.isRequired,
    filterReducer: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    transactionReducer: state.transactionReducer,
    filterReducer: state.filterReducer
});

export default connect(mapStateToProps, { getTransactions })(ViewTransactionPlot);