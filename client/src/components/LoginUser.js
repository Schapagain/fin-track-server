import React,{Component} from 'react';
import { loginUser } from '../actions/authActions';
import { clearErrors}  from '../actions/errorActions';
import propTypes from 'prop-types';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';

class LoginUser extends Component {

    state = {
        modal: false,
        email: "",
        password: "",
        message: null,
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({
                    message: error.error
                })
            }else{
                this.setState({
                    message: null,
                })
            }
        }

        // Close the modal if it's open and the user is authenticated
        if (this.state.modal && isAuthenticated) this.handleToggle();
    }

    handleToggle = () => {
        this.props.clearErrors();
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

        const {email, password } = this.state;
        this.props.loginUser({ email, password});

    }

    render(){
        return(
            <div>
                <NavLink onClick={this.handleToggle} href='#' >
                    Login
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalHeader toggle={this.handleToggle}>Login</ModalHeader>
                    <ModalBody>
                        { this.state.message? <Alert color="danger">{this.state.message}</Alert>: null}
                        <Form onSubmit={this.handleSubmit} className="p-5">
                            <Input onChange={this.handleFormChange} name ="email" value={this.state.email} type="text" placeholder="Enter your email" required/>
                            <Input onChange={this.handleFormChange} name ="password" value={this.state.password} type="password" placeholder="Pick a password" required/>
                            <div className="text-center">
                                <Button className="col-6" type="submit">Login</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
          </div>
        )
    }
}

LoginUser.propTypes = {
    isAuthenticated: propTypes.bool,
    error: propTypes.object.isRequired,
    loginUser: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.errorReducer
});

export default connect(mapStateToProps, { loginUser, clearErrors })(LoginUser);