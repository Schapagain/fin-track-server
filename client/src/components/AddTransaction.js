import React,{Component} from 'react';
import moment from 'moment';
import { addTransaction } from '../actions/transactionActions';
import propTypes from 'prop-types';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import { connect } from 'react-redux';

class AddTransaction extends Component {

    state = {
        modal: false,
        amount: "",
        title: "",
        category: "",
        date: moment().format("YYYY-MM-DD")
    }

    handleToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleFormChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const newTransaction = {
            amount: this.state.amount,
            title: this.state.title,
            category: this.state.category,
            date: this.state.date
        }
        console.log(newTransaction)

        this.props.addTransaction(newTransaction);
    }

    render(){
        return(
            <div>
            <Button color="dark" onClick={this.handleToggle}>Add new transaction</Button>
            <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
                <ModalHeader toggle={this.handleToggle}>Add a new Transaction</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} className="p-5">
                        <FormGroup>
                            <Input onChange={this.handleFormChange} name ="amount" value={this.state.amount} type="number" placeholder="Enter the amount" required/>
                            <Input onChange={this.handleFormChange} name ="title" value={this.state.title} type="text" placeholder="What was this about?" required/>
                            <Input defaultValue="" onChange={this.handleFormChange} type="select" name ="category" required>
                                <option value="" disabled>Pick a Category</option>
                                <option value="Education">Education</option>
                                <option value="Work">Work</option>
                                <option value="Gadgets">Gadgets</option>
                                <option value="Tutoring">Tutoring</option>
                                <option value="Health and Fitness">Health and Fitness</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="Books">Books</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Eat out">Eat out</option>
                            </Input>
                            <Input className="mb-3" onChange={this.handleFormChange} name ="date" type="date" defaultValue={this.state.date}/>
                            <div className="text-center">
                                <Button className="col-6" type="submit">Save</Button>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
          </div>
        )
    }
}

AddTransaction.propTypes = {
    addTransaction: propTypes.func.isRequired,
    transactionReducer: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    transactionReducer: state.transactionReducer
});

export default connect(mapStateToProps, { addTransaction })(AddTransaction);