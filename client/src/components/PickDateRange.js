import React,{ Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { setStartDate, setEndDate } from '../actions/dateActions';
import { getTransactions } from '../actions/transactionActions';
import propTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";

class PickDateRange extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  componentDidUpdate(){
      this.props.getTransactions();
  }

  shouldComponentUpdate(nextProps){
      const { startDate, endDate } = this.props.dates;
      const { startDate:nextStartDate, endDate:nextEndDate } = nextProps.dates;
      return !(startDate.getTime() === nextStartDate.getTime()) || !(endDate.getTime() === nextEndDate.getTime());
  }

  render(){
      const { startDate,endDate } = this.props.dates;
      return (
          <div>
          <DatePicker
            selected={startDate}
            onChange={date => this.props.setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          <DatePicker
            selected={endDate}
            onChange={date => this.props.setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      );
    }
    
  };

PickDateRange.propTypes = {
    getTransactions: propTypes.func.isRequired,
    setStartDate: propTypes.func.isRequired,
    setEndDate: propTypes.func.isRequired,
    dates: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    dates: state.dateReducer
});

export default connect(mapStateToProps, { getTransactions, setStartDate, setEndDate })(PickDateRange);