
import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { setCategory, setType } from '../actions/filterActions';
import { getTransactions } from '../actions/transactionActions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getCurrentFilter } from '../utils';

class PickCategory extends Component {

  shouldComponentUpdate(nextProps){
      const { category, type } = this.props.filters;
      const { category:nextCategory, type:nextType } = nextProps.filters;
      if (!(category === nextCategory && type === nextType)) this.props.getTransactions();
      return true;
  }

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  };

  render(){
    let { category, type } = this.props.filters;
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {getCurrentFilter(type,category)}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={()=>{this.props.setCategory('');this.props.setType('')}}>All transactions</DropdownItem>
          <DropdownItem disabled>Incomes</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setType('income');this.props.setCategory('')}}> All Incomes</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('work');this.props.setType('income')}}>Work</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('freelancing');this.props.setType('income')}}>Freelancing</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('teaching and tutoring');this.props.setType('income')}}>Teaching and tutoring</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('refunds');this.props.setType('income')}}>Refunds</DropdownItem>
          <DropdownItem divider />
          <DropdownItem disabled>Expenses</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setType('expense');this.props.setCategory('')}}> All Expenses</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('eat out');this.props.setType('expense')}}>Eat Out</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('education');this.props.setType('expense')}}>Education</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('alcohol');this.props.setType('expense')}}>Alcohol</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('grocery');this.props.setType('expense')}}>Grocery</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('bills and utilities');this.props.setType('expense')}}>Bills and utilities</DropdownItem>
          <DropdownItem onClick={()=>{this.props.setCategory('miscellaneous');this.props.setType('expense')}}>Miscellaneous</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

PickCategory.propTypes = {
  getTransactions: propTypes.func.isRequired,
  setCategory: propTypes.func.isRequired,
  setType: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  filters: state.filterReducer
});

export default connect(mapStateToProps, {getTransactions, setCategory, setType })(PickCategory);