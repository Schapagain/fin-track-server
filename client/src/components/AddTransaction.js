import React,{Component} from 'react';
import moment from 'moment';
import {Row,Input,Button} from 'reactstrap';
import {v4 as uuid} from 'uuid';

class AddTransaction extends Component {

    state = {
        amount: "",
        title: "",
        category: "",
        date: moment().format("YYYY-MM-DD")
    }

    handleAmountChange = event => {
        this.setState({
            amount: event.target.value
        })
    }
    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }
    handleCategoryChange = event => {
        this.setState({
            category: event.target.value
        })
    }
    handleDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleNewTransaction({id: uuid(),...this.state});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="container p-5" action = '#'>
                        <Row className="justify-content-center mb-1">
                            <Input onChange={this.handleAmountChange} className="col-10" id ="amount" value={this.state.amount} type="number" placeholder="Enter the amount" required/>
                        </Row>
                        <Row className="justify-content-center mb-1">
                            <Input onChange={this.handleTitleChange} className="col-10" id ="title" value={this.state.title} type="text" placeholder="What was this about?" required/>
                        </Row>
                        <Row className="justify-content-center mb-1">
                            <Input defaultValue="" onChange={this.handleCategoryChange} type="select" className="col-10 text-center" id ="category" required>
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
                        </Row>
                        <Row className="justify-content-center mb-1">
                            <Input onChange={this.handleDateChange} className="col-10" id ="date" type="date" defaultValue={this.state.date}/>
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="col-4" type="submit">Save</Button>
                        </Row>
            </form>
        
        )
    }
}

export default AddTransaction;